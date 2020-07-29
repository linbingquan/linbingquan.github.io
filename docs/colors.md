# 配色方案

<template>
    <div class="color-palette moss">
        <div class="title">Moss</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>006270</span></div>
            <div class="color color2"><span>009394</span></div>
            <div class="color color3"><span>00e0c7</span></div>
            <div class="color color4"><span>ffffff</span></div>
        </div>
    </div>
    <div class="color-palette haze">
        <div class="title">Hazes</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>0f6bae</span></div>
            <div class="color color2"><span>248bd6</span></div>
            <div class="color color3"><span>83b8ff</span></div>
            <div class="color color4"><span>c6cdff</span></div>
        </div>
    </div>
    <div class="color-palette cooler">
        <div class="title">Cooler</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>4bb6f4</span></div>
            <div class="color color2"><span>1f9ce4</span></div>
            <div class="color color3"><span>3e60c1</span></div>
            <div class="color color4"><span>5983fc</span></div>
        </div>
    </div>
    <div class="color-palette sunset">
        <div class="title">Sunset</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>365c7d</span></div>
            <div class="color color2"><span>735a7a</span></div>
            <div class="color color3"><span>c56c86</span></div>
            <div class="color color4"><span>ff75b2</span></div>
        </div>
    </div>
    <div class="color-palette tangerine">
        <div class="title">Tangerine</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>ff6d00</span></div>
            <div class="color color2"><span>ff9201</span></div>
            <div class="color color3"><span>ffab40</span></div>
            <div class="color color4"><span>ffd130</span></div>
        </div>
    </div>
    <div class="color-palette fairy">
        <div class="title">Fairy</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>a163f7</span></div>
            <div class="color color2"><span>6f88fc</span></div>
            <div class="color color3"><span>45e3ff</span></div>
            <div class="color color4"><span>fefff1</span></div>
        </div>
    </div>
    <div class="color-palette granite">
        <div class="title">Granite</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>3b7b9a</span></div>
            <div class="color color2"><span>70afce</span></div>
            <div class="color color3"><span>a5def1</span></div>
            <div class="color color4"><span>ffffff</span></div>
        </div>
    </div>
    <div class="color-palette slate">
        <div class="title">Slate</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>5b7fa7</span></div>
            <div class="color color2"><span>508da3</span></div>
            <div class="color color3"><span>a5def1</span></div>
            <div class="color color4"><span>ffffff</span></div>
        </div>
    </div>
    <div class="color-palette docks">
        <div class="title">Docks</div>
        <div class="desc">Color Palette</div>
        <div class="color-container">
            <div class="color color1"><span>43506c</span></div>
            <div class="color color2"><span>ef4b4c</span></div>
            <div class="color color3"><span>3d619b</span></div>
            <div class="color color4"><span>e9e9eb</span></div>
        </div>
    </div>
</template>

<style>
.color-palette {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 725px;
    max-width: 90vw;
    height: 725px;
    max-height: 75vh;
    background: #2a3950;
}

.color-palette .title {
    display: block;
    color: #ffffff;
    font-size: 42px;
    font-weight: 700;
    text-align: center;
}

.color-palette .desc {
    text-align: center;
    color: #96a4b3;
    font-size: 24px;
    font-weight: 100;
}

.color-palette .color-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.color-palette .color {
    position: relative;
    width: 100px;
    max-width: 10vw;
    height: 250px;
    margin: 0 10px;
    border-radius: 25px;
}

.color-palette .color span {
    display: block;
    position: absolute;
    width: 100px;
    max-width: 10vw;
    bottom: -45px;
    text-align: center;
    font-size: 12px;
    color: #ffffff;
    text-transform: uppercase;
}

.moss .color1 { background: #006270; }
.moss .color2 { background: #009394; }
.moss .color3 { background: #00e0c7; }
.moss .color4 { background: #ffffff; }

.haze .color1 { background: #0f6bae; }
.haze .color2 { background: #248bd6; }
.haze .color3 { background: #83b8ff; }
.haze .color4 { background: #c6cdff; }

.cooler .color1 { background: #4bb6f4; }
.cooler .color2 { background: #1f9ce4; }
.cooler .color3 { background: #3e60c1; }
.cooler .color4 { background: #5983fc; }

.sunset .color1 { background: #365c7d; }
.sunset .color2 { background: #735a7a; }
.sunset .color3 { background: #c56c86; }
.sunset .color4 { background: #ff75b2; }

.tangerine .color1 { background: #ff6d00; }
.tangerine .color2 { background: #ff9201; }
.tangerine .color3 { background: #ffab40; }
.tangerine .color4 { background: #ffd130; }

.fairy .color1 { background: #a163f7; }
.fairy .color2 { background: #6f88fc; }
.fairy .color3 { background: #45e3ff; }
.fairy .color4 { background: #fefff1; }

.granite .color1 { background: #3b7b9a; }
.granite .color2 { background: #70afce; }
.granite .color3 { background: #a5def1; }
.granite .color4 { background: #ffffff; }

.slate .color1 { background: #5b7fa7; }
.slate .color2 { background: #508da3; }
.slate .color3 { background: #a5def1; }
.slate .color4 { background: #ffffff; }

.docks .color1 { background: #43506c; }
.docks .color2 { background: #ef4b4c; }
.docks .color3 { background: #3d619b; }
.docks .color4 { background: #e9e9eb; }
</style>