// modal
let modalButton = document.getElementsByClassName('modal-btn');
let modals = document.getElementsByClassName('modal');
let modalClose = document.getElementsByClassName('modal-close');
let closePic = document.getElementsByClassName('modal-closePic');
let modalBG = document.getElementsByClassName('modal-bg');

for (let i = 0; i < modalButton.length; i++) {
    for (let j = 0; j < modals.length; j++) {
        let modalCheck = function () {
            let x = modalButton[j].getAttribute('data-modal');
            let y = modals[j].getAttribute('id');
            if (x == y) {
                return true;
            }
        }

        //Show Modal
        modalButton[j].addEventListener("click", () => {
            if (modalCheck()) {
                modals[j].style.display = "block";
            }
        });

        //Hide Modal
        let modalHide = function (n) {
            for (let i = 0; i < n.length; i++) {
                n[i].addEventListener("click", () => {
                    if (modalCheck()) {
                        modals[j].style.display = "none";
                    }
                });
            }
        }

        modalHide(modalClose);
        modalHide(modalBG);
        modalHide(closePic);
    }
}

// Video Popup

// Chèn Box Modal
let container = document.getElementsByClassName('container');
container[0].insertAdjacentHTML('beforeEnd',
`<div class="modal modal-clipBox" id="modal-clip">
    <div class="modal-closePic">&times;</div>
    <div class="modal-bg"></div>
    <div class="modal-box modal-box-img animate-zoom">
        <div class="modal-pic">
            <iframe id="youtube" width="640" height="350"
                src="" frameborder="0"
                allowfullscreen></iframe>
        </div>
    </div>
</div>`
);

let modalVideos = document.getElementsByClassName('modal-clip');
for(let modalVideo of modalVideos){

    let modalSrc = modalVideo.getAttribute('data-video');

    modalSrc = `//www.youtube-nocookie.com/embed/${modalSrc}?rel=0&controls=1&autoplay=1&nocookie=true`;

    //Tat Popup Video Button Close
    let modalClipBoxs = document.getElementsByClassName('modal-clipBox');

    console.log(modalClipBoxs[0]);

    let youtube = document.getElementById('youtube');
    modalVideo.addEventListener('click', () => {
        youtube.setAttribute('src', modalSrc);
        setTimeout(() => {
            modalClipBoxs[0].style.display = "block";
        },200);
    });
    
    for(let item of closePic){
        for(let modalClipBox of modalClipBoxs){
            item.addEventListener("click", () => {
                modalClipBox.style.display = "none";                    
            });
        }

    }

    // Tat Popup Video Background
    for(let item of modalBG){
        for(let modalClipBox of modalClipBoxs){
            item.addEventListener("click", () => {
                modalClipBox.style.display = "none";
            });
        }

    }
}