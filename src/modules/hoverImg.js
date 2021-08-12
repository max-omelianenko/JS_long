const hoverImg = () => {
    const imgList = document.querySelectorAll('.command__photo');

    
    imgList.forEach((elem) =>{
        let initialSrc;
        elem.addEventListener('mouseover', (e) => {
            initialSrc = e.target.getAttribute('src');
            e.target.src = e.target.dataset.img;
        });
        elem.addEventListener('mouseout', (e) => {
            e.target.setAttribute('src', initialSrc);
        });
    });
};

export default hoverImg;