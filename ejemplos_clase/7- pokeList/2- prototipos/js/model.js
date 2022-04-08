function Pokemon(id, name, thumbnail) {
    this.id = id;
    this.name = name;
    this.thumbnail = thumbnail;

    this.render = () => {
        return  `<article pokemonId=${this.id}>
                    <img
                    src=${this.thumbnail}
                    class="icon-type"
                    alt="icon type"
                    />
                    <p>
                        ${this.name}
                    </p>
                </article>
                `
    };
}
