const queryString = window.location.search
var fr = new FileReader();
console.log(queryString)
const urlParams = new URLSearchParams(queryString)

const product = urlParams.get('b')
console.log(product)
const p = document.getElementById('reader')
const str = 'blog' + product + '.txt'
console.log(str)
console.log(readTextFile(str))

function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                p.innerHTML = allText
            }
        }
    }
    rawFile.send(null);
}