const techs = [
    {
        name: 'javascript',
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },

    {
        name: 'html',
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML'
    },

    {
        name: 'css',
        url: 'https://developer.mozilla.org/en-US/docs/Web/CSS'
    },

    {
        name: 'sass',
        url: 'https://sass-lang.com/'
    },

    {
        name: 'react',
        url: 'https://reactjs.org/'
    },

    {
        name: 'python',
        url: 'https://www.python.org/doc/'
    }
]

module.exports = {

    docsHandler:
        function docsHandler(selected) {
            
            selected.toString()
        
            if (techs.includes(selected)) {
        
                for (const idx in techs) {
        
                    if (techs[idx].name === selected) {
        
                        return toString(techs[idx].url)
                    }
                }
        
            } else {
        
                return console.log("Tech, not found. Check if you not misspelled.", selected)
            }
        }
}