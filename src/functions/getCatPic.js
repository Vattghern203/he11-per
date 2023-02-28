module.exports.getCatPic =

async function getCatPic() {

    try {
        
        await fetch(`https://aws.random.cat/meow`)
                .then(res => (res.json()))
                .then((data) => {
    
                    console.log('success!', data);

                    let file = data.file

                    return file
                });

    } catch(error) {

        console.error(error);
    }

    
}