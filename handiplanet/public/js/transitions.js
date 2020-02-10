/*
 * File Created: 2020-02-07 14:35
 * Author: Alban LECUIVRE
 * Copyright - 2020 Alban LECUIVRE
 */

async function showContextView(currentView){
    hideOverlayButton();
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.left = '100%';

    // Création de la prochaine view
    let nextView;
    if(window.contextView == null){
        window.contextView = new Contexte(tempDiv);
        await window.contextView.load();
        nextView = window.contextView;
        nextView.reloadContext();
    } else {
        if(window.contextView.questionNumber===4){
            nextView = new View14(tempDiv);
            await nextView.load();
        } else {
            tempDiv.appendChild(window.contextView.view);
            window.contextView.view.style.animation = '';
            nextView = window.contextView;
            nextView.reloadContext();
        }
    }
    setBackgroundColor('#FFFFFF');
    showSplash();
    currentView.style.animation = 'scrollTransitionHorizontal 1s forwards';
    currentView.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    setTimeout(() => {
        if (window.contextView.questionNumber !== 4) {
            const nextButton = setOverlayButton('Déja convaincu ?', false, 'sound/hover/convaincu.mp3');
            nextButton.addEventListener('click', () => {
                window.open('https://handiplanet.com/pro', '_blank');
            });
        }
        const viewContainer = document.getElementById('view-container');
        viewContainer.innerHTML = '';
        viewContainer.appendChild(nextView.view);
        currentView.remove();
        window.currentView = nextView.view;
        nextView.play();
        nextView.runAnim();
    }, 1000);
}

async function transitionHorizontal(view, NextView){
    hideOverlayButton();
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.left = '100%';
    setBackgroundColor('#FFFFFF');
    // Création de la prochaine view
    const nextView = new NextView(tempDiv);
    await nextView.load();
    view.style.animation = 'scrollTransitionHorizontal 1s forwards';
    view.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontal 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontal 1s forwards';
    setTimeout(() => {
        const viewContainer = document.getElementById('view-container');
        viewContainer.innerHTML = '';
        viewContainer.appendChild(nextView.view);
        //tempDiv.replaceWith = nextView.view;
        view.remove();
        window.currentView = nextView.view;
        nextView.play();
        nextView.runAnim();
    }, 1000);
}

function hideSplash() {
    const bgOverlay = document.getElementById('background-overlay');
    bgOverlay.style.opacity = '0';
}

function showSplash() {
    const bgOverlay = document.getElementById('background-overlay');
    bgOverlay.style.opacity = '1';
}

async function transitionHorizontalInvert(view, NextView){
    hideOverlayButton();
    // Construction d'une div temporaire positionnée en dehors
    // de l'écran pour faire entrer la prochaine view
    const tempDiv = document.createElement('div');
    document.getElementById('view-container').appendChild(tempDiv);
    tempDiv.style.position = "absolute";
    tempDiv.style.top = '0';
    tempDiv.style.right = '100%';
    setBackgroundColor('#ffffff');

    // Création de la prochaine view
    const nextView = new NextView(tempDiv);
    await nextView.load();
    view.style.animation = 'scrollTransitionHorizontalInvert 1s forwards';
    view.style.webkitAnimation = 'scrollTransitionHorizontalInvert 1s forwards';
    tempDiv.style.animation = 'scrollTransitionHorizontalInvert 1s forwards';
    tempDiv.style.webkitAnimation = 'scrollTransitionHorizontalInvert 1s forwards';
    setTimeout(() => {
        const viewContainer = document.getElementById('view-container');
        viewContainer.innerHTML = '';
        viewContainer.appendChild(nextView.view);
        //tempDiv.replaceWith = nextView.view;
        view.remove();
        window.currentView = nextView.view;
        nextView.play();
        nextView.runAnim();
    }, 1000);
}