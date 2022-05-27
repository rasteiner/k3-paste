<template>
    <div>
        <div @paste="onPaste" class="paste-board" ref="board" tabindex="0"></div>
        <img :src="image" v-if="image" alt="">
    </div>
</template>

<script>
    export default {
        name: 'PasteBoard',
        props: {
        },
        data() {
            return {
                image: null,
                file: null,
            }
        },
        methods: {
            onPaste(event) {
                event.preventDefault();

                // loop through all items in clipboard and find image file
                const items = event.clipboardData.items;
                for (let i = 0; i < items.length; i++) {
                    const item = items[i];
                    if (item.type.indexOf('image') !== -1 && item.kind === 'file') {
                        const file = item.getAsFile();
                        const renamedFile = new File([file], `pasted_image_${new Date().getTime()}.png`, {type: 'image/png'});
                        this.image = URL.createObjectURL(file);
                        this.file = renamedFile;

                        this.$emit('paste', renamedFile);
                        break;
                    }
                }
            }
        }
    }
</script>

<style scoped>
    img {
        max-width: 100%;
        max-height: 15rem;
    }

    .paste-board {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 1rem;
    }

    .paste-board::before {
        content: 'Click here';
        font-size: 1.5rem;
        color: #999;
        border: 2px solid #999;
        text-align: center;
        display: block;
        padding: 2rem;
        width: 100%;
        min-height: 7rem;
        background-color: #eee;
    }

    .paste-board:focus::before {
        content: 'Press Cmd+V / Ctrl+V to paste';
        color: #111;
    }
</style>