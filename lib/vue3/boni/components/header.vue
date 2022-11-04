<script>
export default {
    props: {
        options: {
            type: Array
        }
    },
    setup() {
        
    },
}
</script>
<template>
    <div class="dropdown is-active">
    <div class="dropdown-trigger">
        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Dropdown button</span>
        <span class="icon is-small">
            <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
        </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
        <div class="dropdown-content">
            <a v-for="option in options" :key="option" class="dropdown-item">
                {{ option }}
            </a>
        </div>
    </div>
    </div>
</template>