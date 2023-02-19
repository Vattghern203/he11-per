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

module.exports.docsHandler = 
    
    function docsHandler(selected) {
    
        for (let idx in techs) {

            try {

                if (techs[idx].name == selected) {
    
                    console.log(techs[idx])
    
                    return techs[idx].url
                
                }

            } catch(error) {

                console.log(error)

                return "Tech not found"
            }

        }
    }
