const _presentations = [
    { title: 'Default' },
    { 'title': 'Default1' },
    { 'title': 'Default2' },
    { 'title': 'Default3' },
    { 'title': 'Default4' }
];

export default {
    getList () {
        return new Promise((resolve, reject: any) => {
            setTimeout(() => resolve(_presentations), 500)
        });
    },
  }