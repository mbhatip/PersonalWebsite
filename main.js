export const loadDOM = function() {
    const $root = $('#root');
    $root.append(mainBanner)

    
};

export const mainBanner = function() {
    return `
    <section class="hero is-dark is-fullheight">
    <div class="hero-body">
        <div class="containe">
            <h1 class="title">
                Junead Khan
            </h1>
            <h2 class="subtitle">
                Personal Website
            </h2>
        </div>
    </div>
    </section>
    `
}

$(function() {
    loadDOM();
});