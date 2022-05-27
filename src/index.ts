import PasteBoard from './components/PasteBoard.vue';

/**
 * A function to convert a PNG file to a JPG file.
 * Transparent PNGs are converted to white JPGs.
 * @param {File} file The file to convert.
 */
function convertPngToJpg(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d');
        canvas.width = image.width;
        canvas.height = image.height;

        // fill white background
        context.fillStyle = '#fff';
        context.fillRect(0, 0, image.width, image.height);

        context.drawImage(image, 0, 0);
        const dataURL = canvas.toDataURL('image/jpeg');
        const blob = dataURLToBlob(dataURL);


        resolve(blob);
      };
      image.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  });
}

function dataURLToBlob(dataURL) {
  const BASE64_MARKER = ';base64,';
  const parts = dataURL.split(BASE64_MARKER);
  const contentType = parts[0].split(':')[1];
  const raw = window.atob(parts[1]);
  const rawLength = raw.length;
  const uInt8Array = new Uint8Array(rawLength);

  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i);
  }

  return new Blob([uInt8Array], { type: contentType });
}

panel.plugin('rasteiner/paste', {
  use: [
    function(Vue) {
      const originalFilesField = (Vue as any).options.components['k-files-field'].options;

      Vue.component('k-files-field', {
        extends: originalFilesField,

        render(h) {
          const orig = originalFilesField.render.call(this, h);
          return h('div', { class: 'paste-files-field' }, [orig,
            h('k-dialog', {
              ref: 'pasteDialog',
              props: {
                submitButton: false,
              },
              scopedSlots: {
                default: _ => h(PasteBoard, {
                  ref: 'pasteBoard',
                  on: {
                    paste: () => {
                      this.$refs.pasteDialog.submitButton = 'Upload';
                    }
                  }
                })
              },
              on: {
                submit: async () => {
                  const file = this.$refs.pasteBoard.file;
                  if (file) {
                    this.$refs.pasteDialog.submitButton = 'Converting...';
                    const blob = await convertPngToJpg(file);
                    const fileName = file.name.replace(/\.png$/, '.jpg');
                    if(blob instanceof Blob) {
                      const jpgFile = new File([blob], fileName, { type: 'image/jpeg' });
                      this.drop([jpgFile]);
                    }
                  }
                  this.$refs.pasteDialog.close();
                }
              }
            })
          ]);
        },

        computed: {
          options() {
            const parentOptions = originalFilesField.computed.options.call(this);

            parentOptions.options.push({
              icon: 'template',
              text: 'Paste',
              click: () => {
                this.$refs.pasteDialog.open();
              }
            });

            return parentOptions;
          }
        }
      });
    }
  ]
})
