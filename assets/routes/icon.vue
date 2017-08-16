<template>
    <div>
        <header class="panel-heading">
            <h1>Icon 图标</h1>
        </header>
        <div class="panel-body">
            <h2>概述</h2>
            <p class="desc-line">使用 Icon 组件，指定对应图标用type属性</p>

            <h2>代码示例</h2>
            <div class="example-box">
                <div class="example-demo">
                    <Icon type="alert-circled" size="32" color="#f60" class="aa"></Icon>
                </div>
                <div class="example-code">
                    <script type="text/html" v-code>
                        <Icon 
                            <org>type</org>=<green>"alert-circled"</green> 
                            <org>size</org>=<green>"32"</green> 
                            <org>color</org>=<green>"#f60"</green>>
                        </Icon>
                    </script>
                </div>
            </div>
            
            <h2>API</h2>
            <table class="api-table">
                <thead>
                    <tr>
                        <th>属性</th> 
                        <th>说明</th> 
                        <th>类型</th> 
                        <th>默认值</th>
                    </tr>
                </thead> 
                <tbody>
                    <tr>
                        <td>type</td> 
                        <td>图标名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>size</td> 
                        <td>图标的大小，单位是 px（font-size 字体大小）</td> 
                        <td>Number | String</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>color</td> 
                        <td>图标的颜色</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr> 
                    <tr>
                        <td>className</td> 
                        <td>自定义的class名称</td> 
                        <td>String</td> 
                        <td>-</td>
                    </tr>
                </tbody>
            </table>

            <h2>示例</h2>
            <div class="icons-list">
                <div class="icons-item">
                    <Icon type="ionic" size="32"></Icon>
                    <p>ionic</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-up-a" size="32"></Icon>
                    <p>arrow-up-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-right-a" size="32"></Icon>
                    <p>arrow-right-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-down-a" size="32"></Icon>
                    <p>arrow-down-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-left-a" size="32"></Icon>
                    <p>arrow-left-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-up-b" size="32"></Icon>
                    <p>arrow-up-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-right-b" size="32"></Icon>
                    <p>arrow-right-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-down-b" size="32"></Icon>
                    <p>arrow-down-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-left-b" size="32"></Icon>
                    <p>arrow-left-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-up-c" size="32"></Icon>
                    <p>arrow-up-c</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-right-c" size="32"></Icon>
                    <p>arrow-right-c</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-down-c" size="32"></Icon>
                    <p>arrow-down-c</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-left-c" size="32"></Icon>
                    <p>arrow-left-c</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-return-right" size="32"></Icon>
                    <p>arrow-return-right</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-return-left" size="32"></Icon>
                    <p>arrow-return-left</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-swap" size="32"></Icon>
                    <p>arrow-swap</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-shrink" size="32"></Icon>
                    <p>arrow-shrink</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-expand" size="32"></Icon>
                    <p>arrow-expand</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-move" size="32"></Icon>
                    <p>arrow-move</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-resize" size="32"></Icon>
                    <p>arrow-resize</p>
                </div>
                <div class="icons-item">
                    <Icon type="chevron-up" size="32"></Icon>
                    <p>chevron-up</p>
                </div>
                <div class="icons-item">
                    <Icon type="chevron-right" size="32"></Icon>
                    <p>chevron-right</p>
                </div>
                <div class="icons-item">
                    <Icon type="chevron-down" size="32"></Icon>
                    <p>chevron-down</p>
                </div>
                <div class="icons-item">
                    <Icon type="chevron-left" size="32"></Icon>
                    <p>chevron-left</p>
                </div>
                <div class="icons-item">
                    <Icon type="navicon-round" size="32"></Icon>
                    <p>navicon-round</p>
                </div>
                <div class="icons-item">
                    <Icon type="navicon" size="32"></Icon>
                    <p>navicon</p>
                </div>
                <div class="icons-item">
                    <Icon type="drag" size="32"></Icon>
                    <p>drag</p>
                </div>
                <div class="icons-item">
                    <Icon type="log-in" size="32"></Icon>
                    <p>log-in</p>
                </div>
                <div class="icons-item">
                    <Icon type="log-out" size="32"></Icon>
                    <p>log-out</p>
                </div>
                <div class="icons-item">
                    <Icon type="checkmark-round" size="32"></Icon>
                    <p>checkmark-round</p>
                </div>
                <div class="icons-item">
                    <Icon type="checkmark" size="32"></Icon>
                    <p>checkmark</p>
                </div>
                <div class="icons-item">
                    <Icon type="checkmark-circled" size="32"></Icon>
                    <p>checkmark-circled</p>
                </div>
                <div class="icons-item">
                    <Icon type="close-round" size="32"></Icon>
                    <p>close-round</p>
                </div>
                <div class="icons-item">
                    <Icon type="close" size="32"></Icon>
                    <p>close</p>
                </div>
                <div class="icons-item">
                    <Icon type="close-circled" size="32"></Icon>
                    <p>close-circled</p>
                </div>
                <div class="icons-item">
                    <Icon type="plus-round" size="32"></Icon>
                    <p>plus-round</p>
                </div>
                <div class="icons-item">
                    <Icon type="plus" size="32"></Icon>
                    <p>plus</p>
                </div>
                <div class="icons-item">
                    <Icon type="plus-circled" size="32"></Icon>
                    <p>plus-circled</p>
                </div>
                <div class="icons-item">
                    <Icon type="minus-round" size="32"></Icon>
                    <p>minus-round</p>
                </div>
                <div class="icons-item">
                    <Icon type="minus" size="32"></Icon>
                    <p>minus</p>
                </div>
                <div class="icons-item">
                    <Icon type="minus-circled" size="32"></Icon>
                    <p>minus-circled</p>
                </div>
                <div class="icons-item">
                    <Icon type="information" size="32"></Icon>
                    <p>information</p>
                </div>
                <div class="icons-item">
                    <Icon type="information-circled" size="32"></Icon>
                    <p>information-circled</p>
                </div>
                <div class="icons-item">
                    <Icon type="help" size="32"></Icon>
                    <p>help</p>
                </div>
                <div class="icons-item">
                    <Icon type="help-circled" size="32"></Icon>
                    <p>help-circled</p>
                </div>
                <div class="icons-item">
                    <Icon type="backspace-outline" size="32"></Icon>
                    <p>backspace-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="backspace" size="32"></Icon>
                    <p>backspace</p>
                </div>
                <div class="icons-item">
                    <Icon type="help-buoy" size="32"></Icon>
                    <p>help-buoy</p>
                </div>
                <div class="icons-item">
                    <Icon type="asterisk" size="32"></Icon>
                    <p>asterisk</p>
                </div>
                <div class="icons-item">
                    <Icon type="alert" size="32"></Icon>
                    <p>alert</p>
                </div>
                <div class="icons-item">
                    <Icon type="alert-circled" size="32"></Icon>
                    <p>alert-circled</p>
                </div>
                <div class="icons-item">
                    <Icon type="refresh" size="32"></Icon>
                    <p>refresh</p>
                </div>
                <div class="icons-item">
                    <Icon type="loop" size="32"></Icon>
                    <p>loop</p>
                </div>
                <div class="icons-item">
                    <Icon type="shuffle" size="32"></Icon>
                    <p>shuffle</p>
                </div>
                <div class="icons-item">
                    <Icon type="home" size="32"></Icon>
                    <p>home</p>
                </div>
                <div class="icons-item">
                    <Icon type="search" size="32"></Icon>
                    <p>search</p>
                </div>
                <div class="icons-item">
                    <Icon type="flag" size="32"></Icon>
                    <p>flag</p>
                </div>
                <div class="icons-item">
                    <Icon type="star" size="32"></Icon>
                    <p>star</p>
                </div>
                <div class="icons-item">
                    <Icon type="heart" size="32"></Icon>
                    <p>heart</p>
                </div>
                <div class="icons-item">
                    <Icon type="heart-broken" size="32"></Icon>
                    <p>heart-broken</p>
                </div>
                <div class="icons-item">
                    <Icon type="gear-a" size="32"></Icon>
                    <p>gear-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="gear-b" size="32"></Icon>
                    <p>gear-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="toggle-filled" size="32"></Icon>
                    <p>toggle-filled</p>
                </div>
                <div class="icons-item">
                    <Icon type="toggle" size="32"></Icon>
                    <p>toggle</p>
                </div>
                <div class="icons-item">
                    <Icon type="settings" size="32"></Icon>
                    <p>settings</p>
                </div>
                <div class="icons-item">
                    <Icon type="wrench" size="32"></Icon>
                    <p>wrench</p>
                </div>
                <div class="icons-item">
                    <Icon type="hammer" size="32"></Icon>
                    <p>hammer</p>
                </div>
                <div class="icons-item">
                    <Icon type="edit" size="32"></Icon>
                    <p>edit</p>
                </div>
                <div class="icons-item">
                    <Icon type="trash-a" size="32"></Icon>
                    <p>trash-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="trash-b" size="32"></Icon>
                    <p>trash-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="document" size="32"></Icon>
                    <p>document</p>
                </div>
                <div class="icons-item">
                    <Icon type="document-text" size="32"></Icon>
                    <p>document-text</p>
                </div>
                <div class="icons-item">
                    <Icon type="clipboard" size="32"></Icon>
                    <p>clipboard</p>
                </div>
                <div class="icons-item">
                    <Icon type="scissors" size="32"></Icon>
                    <p>scissors</p>
                </div>
                <div class="icons-item">
                    <Icon type="funnel" size="32"></Icon>
                    <p>funnel</p>
                </div>
                <div class="icons-item">
                    <Icon type="bookmark" size="32"></Icon>
                    <p>bookmark</p>
                </div>
                <div class="icons-item">
                    <Icon type="email" size="32"></Icon>
                    <p>email</p>
                </div>
                <div class="icons-item">
                    <Icon type="email-unread" size="32"></Icon>
                    <p>email-unread</p>
                </div>
                <div class="icons-item">
                    <Icon type="folder" size="32"></Icon>
                    <p>folder</p>
                </div>
                <div class="icons-item">
                    <Icon type="filing" size="32"></Icon>
                    <p>filing</p>
                </div>
                <div class="icons-item">
                    <Icon type="archive" size="32"></Icon>
                    <p>archive</p>
                </div>
                <div class="icons-item">
                    <Icon type="reply" size="32"></Icon>
                    <p>reply</p>
                </div>
                <div class="icons-item">
                    <Icon type="reply-all" size="32"></Icon>
                    <p>reply-all</p>
                </div>
                <div class="icons-item">
                    <Icon type="forward" size="32"></Icon>
                    <p>forward</p>
                </div>
                <div class="icons-item">
                    <Icon type="share" size="32"></Icon>
                    <p>share</p>
                </div>
                <div class="icons-item">
                    <Icon type="paper-airplane" size="32"></Icon>
                    <p>paper-airplane</p>
                </div>
                <div class="icons-item">
                    <Icon type="link" size="32"></Icon>
                    <p>link</p>
                </div>
                <div class="icons-item">
                    <Icon type="paperclip" size="32"></Icon>
                    <p>paperclip</p>
                </div>
                <div class="icons-item">
                    <Icon type="compose" size="32"></Icon>
                    <p>compose</p>
                </div>
                <div class="icons-item">
                    <Icon type="briefcase" size="32"></Icon>
                    <p>briefcase</p>
                </div>
                <div class="icons-item">
                    <Icon type="medkit" size="32"></Icon>
                    <p>medkit</p>
                </div>
                <div class="icons-item">
                    <Icon type="at" size="32"></Icon>
                    <p>at</p>
                </div>
                <div class="icons-item">
                    <Icon type="pound" size="32"></Icon>
                    <p>pound</p>
                </div>
                <div class="icons-item">
                    <Icon type="quote" size="32"></Icon>
                    <p>quote</p>
                </div>
                <div class="icons-item">
                    <Icon type="cloud" size="32"></Icon>
                    <p>cloud</p>
                </div>
                <div class="icons-item">
                    <Icon type="upload" size="32"></Icon>
                    <p>upload</p>
                </div>
                <div class="icons-item">
                    <Icon type="more" size="32"></Icon>
                    <p>more</p>
                </div>
                <div class="icons-item">
                    <Icon type="grid" size="32"></Icon>
                    <p>grid</p>
                </div>
                <div class="icons-item">
                    <Icon type="calendar" size="32"></Icon>
                    <p>calendar</p>
                </div>
                <div class="icons-item">
                    <Icon type="clock" size="32"></Icon>
                    <p>clock</p>
                </div>
                <div class="icons-item">
                    <Icon type="compass" size="32"></Icon>
                    <p>compass</p>
                </div>
                <div class="icons-item">
                    <Icon type="pinpoint" size="32"></Icon>
                    <p>pinpoint</p>
                </div>
                <div class="icons-item">
                    <Icon type="pin" size="32"></Icon>
                    <p>pin</p>
                </div>
                <div class="icons-item">
                    <Icon type="navigate" size="32"></Icon>
                    <p>navigate</p>
                </div>
                <div class="icons-item">
                    <Icon type="location" size="32"></Icon>
                    <p>location</p>
                </div>
                <div class="icons-item">
                    <Icon type="map" size="32"></Icon>
                    <p>map</p>
                </div>
                <div class="icons-item">
                    <Icon type="lock-combination" size="32"></Icon>
                    <p>lock-combination</p>
                </div>
                <div class="icons-item">
                    <Icon type="locked" size="32"></Icon>
                    <p>locked</p>
                </div>
                <div class="icons-item">
                    <Icon type="unlocked" size="32"></Icon>
                    <p>unlocked</p>
                </div>
                <div class="icons-item">
                    <Icon type="key" size="32"></Icon>
                    <p>key</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-graph-up-right" size="32"></Icon>
                    <p>arrow-graph-up-right</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-graph-down-right" size="32"></Icon>
                    <p>arrow-graph-down-right</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-graph-up-left" size="32"></Icon>
                    <p>arrow-graph-up-left</p>
                </div>
                <div class="icons-item">
                    <Icon type="arrow-graph-down-left" size="32"></Icon>
                    <p>arrow-graph-down-left</p>
                </div>
                <div class="icons-item">
                    <Icon type="stats-bars" size="32"></Icon>
                    <p>stats-bars</p>
                </div>
                <div class="icons-item">
                    <Icon type="connection-bars" size="32"></Icon>
                    <p>connection-bars</p>
                </div>
                <div class="icons-item">
                    <Icon type="pie-graph" size="32"></Icon>
                    <p>pie-graph</p>
                </div>
                <div class="icons-item">
                    <Icon type="chatbubble" size="32"></Icon>
                    <p>chatbubble</p>
                </div>
                <div class="icons-item">
                    <Icon type="chatbubble-working" size="32"></Icon>
                    <p>chatbubble-working</p>
                </div>
                <div class="icons-item">
                    <Icon type="chatbubbles" size="32"></Icon>
                    <p>chatbubbles</p>
                </div>
                <div class="icons-item">
                    <Icon type="chatbox" size="32"></Icon>
                    <p>chatbox</p>
                </div>
                <div class="icons-item">
                    <Icon type="chatbox-working" size="32"></Icon>
                    <p>chatbox-working</p>
                </div>
                <div class="icons-item">
                    <Icon type="chatboxes" size="32"></Icon>
                    <p>chatboxes</p>
                </div>
                <div class="icons-item">
                    <Icon type="person" size="32"></Icon>
                    <p>person</p>
                </div>
                <div class="icons-item">
                    <Icon type="person-add" size="32"></Icon>
                    <p>person-add</p>
                </div>
                <div class="icons-item">
                    <Icon type="person-stalker" size="32"></Icon>
                    <p>person-stalker</p>
                </div>
                <div class="icons-item">
                    <Icon type="woman" size="32"></Icon>
                    <p>woman</p>
                </div>
                <div class="icons-item">
                    <Icon type="man" size="32"></Icon>
                    <p>man</p>
                </div>
                <div class="icons-item">
                    <Icon type="female" size="32"></Icon>
                    <p>female</p>
                </div>
                <div class="icons-item">
                    <Icon type="male" size="32"></Icon>
                    <p>male</p>
                </div>
                <div class="icons-item">
                    <Icon type="transgender" size="32"></Icon>
                    <p>transgender</p>
                </div>
                <div class="icons-item">
                    <Icon type="fork" size="32"></Icon>
                    <p>fork</p>
                </div>
                <div class="icons-item">
                    <Icon type="knife" size="32"></Icon>
                    <p>knife</p>
                </div>
                <div class="icons-item">
                    <Icon type="spoon" size="32"></Icon>
                    <p>spoon</p>
                </div>
                <div class="icons-item">
                    <Icon type="soup-can-outline" size="32"></Icon>
                    <p>soup-can-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="soup-can" size="32"></Icon>
                    <p>soup-can</p>
                </div>
                <div class="icons-item">
                    <Icon type="beer" size="32"></Icon>
                    <p>beer</p>
                </div>
                <div class="icons-item">
                    <Icon type="wineglass" size="32"></Icon>
                    <p>wineglass</p>
                </div>
                <div class="icons-item">
                    <Icon type="coffee" size="32"></Icon>
                    <p>coffee</p>
                </div>
                <div class="icons-item">
                    <Icon type="icecream" size="32"></Icon>
                    <p>icecream</p>
                </div>
                <div class="icons-item">
                    <Icon type="pizza" size="32"></Icon>
                    <p>pizza</p>
                </div>
                <div class="icons-item">
                    <Icon type="power" size="32"></Icon>
                    <p>power</p>
                </div>
                <div class="icons-item">
                    <Icon type="mouse" size="32"></Icon>
                    <p>mouse</p>
                </div>
                <div class="icons-item">
                    <Icon type="battery-full" size="32"></Icon>
                    <p>battery-full</p>
                </div>
                <div class="icons-item">
                    <Icon type="battery-half" size="32"></Icon>
                    <p>battery-half</p>
                </div>
                <div class="icons-item">
                    <Icon type="battery-low" size="32"></Icon>
                    <p>battery-low</p>
                </div>
                <div class="icons-item">
                    <Icon type="battery-empty" size="32"></Icon>
                    <p>battery-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="battery-charging" size="32"></Icon>
                    <p>battery-charging</p>
                </div>
                <div class="icons-item">
                    <Icon type="wifi" size="32"></Icon>
                    <p>wifi</p>
                </div>
                <div class="icons-item">
                    <Icon type="bluetooth" size="32"></Icon>
                    <p>bluetooth</p>
                </div>
                <div class="icons-item">
                    <Icon type="calculator" size="32"></Icon>
                    <p>calculator</p>
                </div>
                <div class="icons-item">
                    <Icon type="camera" size="32"></Icon>
                    <p>camera</p>
                </div>
                <div class="icons-item">
                    <Icon type="eye" size="32"></Icon>
                    <p>eye</p>
                </div>
                <div class="icons-item">
                    <Icon type="eye-disabled" size="32"></Icon>
                    <p>eye-disabled</p>
                </div>
                <div class="icons-item">
                    <Icon type="flash" size="32"></Icon>
                    <p>flash</p>
                </div>
                <div class="icons-item">
                    <Icon type="flash-off" size="32"></Icon>
                    <p>flash-off</p>
                </div>
                <div class="icons-item">
                    <Icon type="qr-scanner" size="32"></Icon>
                    <p>qr-scanner</p>
                </div>
                <div class="icons-item">
                    <Icon type="image" size="32"></Icon>
                    <p>image</p>
                </div>
                <div class="icons-item">
                    <Icon type="images" size="32"></Icon>
                    <p>images</p>
                </div>
                <div class="icons-item">
                    <Icon type="wand" size="32"></Icon>
                    <p>wand</p>
                </div>
                <div class="icons-item">
                    <Icon type="contrast" size="32"></Icon>
                    <p>contrast</p>
                </div>
                <div class="icons-item">
                    <Icon type="aperture" size="32"></Icon>
                    <p>aperture</p>
                </div>
                <div class="icons-item">
                    <Icon type="crop" size="32"></Icon>
                    <p>crop</p>
                </div>
                <div class="icons-item">
                    <Icon type="easel" size="32"></Icon>
                    <p>easel</p>
                </div>
                <div class="icons-item">
                    <Icon type="paintbrush" size="32"></Icon>
                    <p>paintbrush</p>
                </div>
                <div class="icons-item">
                    <Icon type="paintbucket" size="32"></Icon>
                    <p>paintbucket</p>
                </div>
                <div class="icons-item">
                    <Icon type="monitor" size="32"></Icon>
                    <p>monitor</p>
                </div>
                <div class="icons-item">
                    <Icon type="laptop" size="32"></Icon>
                    <p>laptop</p>
                </div>
                <div class="icons-item">
                    <Icon type="ipad" size="32"></Icon>
                    <p>ipad</p>
                </div>
                <div class="icons-item">
                    <Icon type="iphone" size="32"></Icon>
                    <p>iphone</p>
                </div>
                <div class="icons-item">
                    <Icon type="ipod" size="32"></Icon>
                    <p>ipod</p>
                </div>
                <div class="icons-item">
                    <Icon type="printer" size="32"></Icon>
                    <p>printer</p>
                </div>
                <div class="icons-item">
                    <Icon type="usb" size="32"></Icon>
                    <p>usb</p>
                </div>
                <div class="icons-item">
                    <Icon type="outlet" size="32"></Icon>
                    <p>outlet</p>
                </div>
                <div class="icons-item">
                    <Icon type="bug" size="32"></Icon>
                    <p>bug</p>
                </div>
                <div class="icons-item">
                    <Icon type="code" size="32"></Icon>
                    <p>code</p>
                </div>
                <div class="icons-item">
                    <Icon type="code-working" size="32"></Icon>
                    <p>code-working</p>
                </div>
                <div class="icons-item">
                    <Icon type="code-download" size="32"></Icon>
                    <p>code-download</p>
                </div>
                <div class="icons-item">
                    <Icon type="fork-repo" size="32"></Icon>
                    <p>fork-repo</p>
                </div>
                <div class="icons-item">
                    <Icon type="network" size="32"></Icon>
                    <p>network</p>
                </div>
                <div class="icons-item">
                    <Icon type="pull-request" size="32"></Icon>
                    <p>pull-request</p>
                </div>
                <div class="icons-item">
                    <Icon type="merge" size="32"></Icon>
                    <p>merge</p>
                </div>
                <div class="icons-item">
                    <Icon type="xbox" size="32"></Icon>
                    <p>xbox</p>
                </div>
                <div class="icons-item">
                    <Icon type="playstation" size="32"></Icon>
                    <p>playstation</p>
                </div>
                <div class="icons-item">
                    <Icon type="steam" size="32"></Icon>
                    <p>steam</p>
                </div>
                <div class="icons-item">
                    <Icon type="closed-captioning" size="32"></Icon>
                    <p>closed-captioning</p>
                </div>
                <div class="icons-item">
                    <Icon type="videocamera" size="32"></Icon>
                    <p>videocamera</p>
                </div>
                <div class="icons-item">
                    <Icon type="film-marker" size="32"></Icon>
                    <p>film-marker</p>
                </div>
                <div class="icons-item">
                    <Icon type="disc" size="32"></Icon>
                    <p>disc</p>
                </div>
                <div class="icons-item">
                    <Icon type="headphone" size="32"></Icon>
                    <p>headphone</p>
                </div>
                <div class="icons-item">
                    <Icon type="music-note" size="32"></Icon>
                    <p>music-note</p>
                </div>
                <div class="icons-item">
                    <Icon type="radio-waves" size="32"></Icon>
                    <p>radio-waves</p>
                </div>
                <div class="icons-item">
                    <Icon type="speakerphone" size="32"></Icon>
                    <p>speakerphone</p>
                </div>
                <div class="icons-item">
                    <Icon type="mic-a" size="32"></Icon>
                    <p>mic-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="mic-b" size="32"></Icon>
                    <p>mic-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="mic-c" size="32"></Icon>
                    <p>mic-c</p>
                </div>
                <div class="icons-item">
                    <Icon type="volume-high" size="32"></Icon>
                    <p>volume-high</p>
                </div>
                <div class="icons-item">
                    <Icon type="volume-medium" size="32"></Icon>
                    <p>volume-medium</p>
                </div>
                <div class="icons-item">
                    <Icon type="volume-low" size="32"></Icon>
                    <p>volume-low</p>
                </div>
                <div class="icons-item">
                    <Icon type="volume-mute" size="32"></Icon>
                    <p>volume-mute</p>
                </div>
                <div class="icons-item">
                    <Icon type="levels" size="32"></Icon>
                    <p>levels</p>
                </div>
                <div class="icons-item">
                    <Icon type="play" size="32"></Icon>
                    <p>play</p>
                </div>
                <div class="icons-item">
                    <Icon type="pause" size="32"></Icon>
                    <p>pause</p>
                </div>
                <div class="icons-item">
                    <Icon type="stop" size="32"></Icon>
                    <p>stop</p>
                </div>
                <div class="icons-item">
                    <Icon type="record" size="32"></Icon>
                    <p>record</p>
                </div>
                <div class="icons-item">
                    <Icon type="skip-forward" size="32"></Icon>
                    <p>skip-forward</p>
                </div>
                <div class="icons-item">
                    <Icon type="skip-backward" size="32"></Icon>
                    <p>skip-backward</p>
                </div>
                <div class="icons-item">
                    <Icon type="eject" size="32"></Icon>
                    <p>eject</p>
                </div>
                <div class="icons-item">
                    <Icon type="bag" size="32"></Icon>
                    <p>bag</p>
                </div>
                <div class="icons-item">
                    <Icon type="card" size="32"></Icon>
                    <p>card</p>
                </div>
                <div class="icons-item">
                    <Icon type="cash" size="32"></Icon>
                    <p>cash</p>
                </div>
                <div class="icons-item">
                    <Icon type="pricetag" size="32"></Icon>
                    <p>pricetag</p>
                </div>
                <div class="icons-item">
                    <Icon type="pricetags" size="32"></Icon>
                    <p>pricetags</p>
                </div>
                <div class="icons-item">
                    <Icon type="thumbsup" size="32"></Icon>
                    <p>thumbsup</p>
                </div>
                <div class="icons-item">
                    <Icon type="thumbsdown" size="32"></Icon>
                    <p>thumbsdown</p>
                </div>
                <div class="icons-item">
                    <Icon type="happy-outline" size="32"></Icon>
                    <p>happy-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="happy" size="32"></Icon>
                    <p>happy</p>
                </div>
                <div class="icons-item">
                    <Icon type="sad-outline" size="32"></Icon>
                    <p>sad-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="sad" size="32"></Icon>
                    <p>sad</p>
                </div>
                <div class="icons-item">
                    <Icon type="bowtie" size="32"></Icon>
                    <p>bowtie</p>
                </div>
                <div class="icons-item">
                    <Icon type="tshirt-outline" size="32"></Icon>
                    <p>tshirt-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="tshirt" size="32"></Icon>
                    <p>tshirt</p>
                </div>
                <div class="icons-item">
                    <Icon type="trophy" size="32"></Icon>
                    <p>trophy</p>
                </div>
                <div class="icons-item">
                    <Icon type="podium" size="32"></Icon>
                    <p>podium</p>
                </div>
                <div class="icons-item">
                    <Icon type="ribbon-a" size="32"></Icon>
                    <p>ribbon-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="ribbon-b" size="32"></Icon>
                    <p>ribbon-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="university" size="32"></Icon>
                    <p>university</p>
                </div>
                <div class="icons-item">
                    <Icon type="magnet" size="32"></Icon>
                    <p>magnet</p>
                </div>
                <div class="icons-item">
                    <Icon type="beaker" size="32"></Icon>
                    <p>beaker</p>
                </div>
                <div class="icons-item">
                    <Icon type="erlenmeyer-flask" size="32"></Icon>
                    <p>erlenmeyer-flask</p>
                </div>
                <div class="icons-item">
                    <Icon type="egg" size="32"></Icon>
                    <p>egg</p>
                </div>
                <div class="icons-item">
                    <Icon type="earth" size="32"></Icon>
                    <p>earth</p>
                </div>
                <div class="icons-item">
                    <Icon type="planet" size="32"></Icon>
                    <p>planet</p>
                </div>
                <div class="icons-item">
                    <Icon type="lightbulb" size="32"></Icon>
                    <p>lightbulb</p>
                </div>
                <div class="icons-item">
                    <Icon type="cube" size="32"></Icon>
                    <p>cube</p>
                </div>
                <div class="icons-item">
                    <Icon type="leaf" size="32"></Icon>
                    <p>leaf</p>
                </div>
                <div class="icons-item">
                    <Icon type="waterdrop" size="32"></Icon>
                    <p>waterdrop</p>
                </div>
                <div class="icons-item">
                    <Icon type="flame" size="32"></Icon>
                    <p>flame</p>
                </div>
                <div class="icons-item">
                    <Icon type="fireball" size="32"></Icon>
                    <p>fireball</p>
                </div>
                <div class="icons-item">
                    <Icon type="bonfire" size="32"></Icon>
                    <p>bonfire</p>
                </div>
                <div class="icons-item">
                    <Icon type="umbrella" size="32"></Icon>
                    <p>umbrella</p>
                </div>
                <div class="icons-item">
                    <Icon type="nuclear" size="32"></Icon>
                    <p>nuclear</p>
                </div>
                <div class="icons-item">
                    <Icon type="no-smoking" size="32"></Icon>
                    <p>no-smoking</p>
                </div>
                <div class="icons-item">
                    <Icon type="thermometer" size="32"></Icon>
                    <p>thermometer</p>
                </div>
                <div class="icons-item">
                    <Icon type="speedometer" size="32"></Icon>
                    <p>speedometer</p>
                </div>
                <div class="icons-item">
                    <Icon type="model-s" size="32"></Icon>
                    <p>model-s</p>
                </div>
                <div class="icons-item">
                    <Icon type="plane" size="32"></Icon>
                    <p>plane</p>
                </div>
                <div class="icons-item">
                    <Icon type="jet" size="32"></Icon>
                    <p>jet</p>
                </div>
                <div class="icons-item">
                    <Icon type="load-a" size="32"></Icon>
                    <p>load-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="load-b" size="32"></Icon>
                    <p>load-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="load-c" size="32"></Icon>
                    <p>load-c</p>
                </div>
                <div class="icons-item">
                    <Icon type="load-d" size="32"></Icon>
                    <p>load-d</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-ionic-outline" size="32"></Icon>
                    <p>ios-ionic-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-back" size="32"></Icon>
                    <p>ios-arrow-back</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-forward" size="32"></Icon>
                    <p>ios-arrow-forward</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-up" size="32"></Icon>
                    <p>ios-arrow-up</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-right" size="32"></Icon>
                    <p>ios-arrow-right</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-down" size="32"></Icon>
                    <p>ios-arrow-down</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-left" size="32"></Icon>
                    <p>ios-arrow-left</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-thin-up" size="32"></Icon>
                    <p>ios-arrow-thin-up</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-thin-right" size="32"></Icon>
                    <p>ios-arrow-thin-right</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-thin-down" size="32"></Icon>
                    <p>ios-arrow-thin-down</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-arrow-thin-left" size="32"></Icon>
                    <p>ios-arrow-thin-left</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-circle-filled" size="32"></Icon>
                    <p>ios-circle-filled</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-circle-outline" size="32"></Icon>
                    <p>ios-circle-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-checkmark-empty" size="32"></Icon>
                    <p>ios-checkmark-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-checkmark-outline" size="32"></Icon>
                    <p>ios-checkmark-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-checkmark" size="32"></Icon>
                    <p>ios-checkmark</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-plus-empty" size="32"></Icon>
                    <p>ios-plus-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-plus-outline" size="32"></Icon>
                    <p>ios-plus-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-plus" size="32"></Icon>
                    <p>ios-plus</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-close-empty" size="32"></Icon>
                    <p>ios-close-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-close-outline" size="32"></Icon>
                    <p>ios-close-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-close" size="32"></Icon>
                    <p>ios-close</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-minus-empty" size="32"></Icon>
                    <p>ios-minus-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-minus-outline" size="32"></Icon>
                    <p>ios-minus-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-minus" size="32"></Icon>
                    <p>ios-minus</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-information-empty" size="32"></Icon>
                    <p>ios-information-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-information-outline" size="32"></Icon>
                    <p>ios-information-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-information" size="32"></Icon>
                    <p>ios-information</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-help-empty" size="32"></Icon>
                    <p>ios-help-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-help-outline" size="32"></Icon>
                    <p>ios-help-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-help" size="32"></Icon>
                    <p>ios-help</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-search" size="32"></Icon>
                    <p>ios-search</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-search-strong" size="32"></Icon>
                    <p>ios-search-strong</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-star" size="32"></Icon>
                    <p>ios-star</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-star-half" size="32"></Icon>
                    <p>ios-star-half</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-star-outline" size="32"></Icon>
                    <p>ios-star-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-heart" size="32"></Icon>
                    <p>ios-heart</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-heart-outline" size="32"></Icon>
                    <p>ios-heart-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-more" size="32"></Icon>
                    <p>ios-more</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-more-outline" size="32"></Icon>
                    <p>ios-more-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-home" size="32"></Icon>
                    <p>ios-home</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-home-outline" size="32"></Icon>
                    <p>ios-home-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloud" size="32"></Icon>
                    <p>ios-cloud</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloud-outline" size="32"></Icon>
                    <p>ios-cloud-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloud-upload" size="32"></Icon>
                    <p>ios-cloud-upload</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloud-upload-outline" size="32"></Icon>
                    <p>ios-cloud-upload-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloud-download" size="32"></Icon>
                    <p>ios-cloud-download</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloud-download-outline" size="32"></Icon>
                    <p>ios-cloud-download-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-upload" size="32"></Icon>
                    <p>ios-upload</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-upload-outline" size="32"></Icon>
                    <p>ios-upload-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-download" size="32"></Icon>
                    <p>ios-download</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-download-outline" size="32"></Icon>
                    <p>ios-download-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-refresh" size="32"></Icon>
                    <p>ios-refresh</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-refresh-outline" size="32"></Icon>
                    <p>ios-refresh-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-refresh-empty" size="32"></Icon>
                    <p>ios-refresh-empty</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-reload" size="32"></Icon>
                    <p>ios-reload</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-loop-strong" size="32"></Icon>
                    <p>ios-loop-strong</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-loop" size="32"></Icon>
                    <p>ios-loop</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-bookmarks" size="32"></Icon>
                    <p>ios-bookmarks</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-bookmarks-outline" size="32"></Icon>
                    <p>ios-bookmarks-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-book" size="32"></Icon>
                    <p>ios-book</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-book-outline" size="32"></Icon>
                    <p>ios-book-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flag" size="32"></Icon>
                    <p>ios-flag</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flag-outline" size="32"></Icon>
                    <p>ios-flag-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-glasses" size="32"></Icon>
                    <p>ios-glasses</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-glasses-outline" size="32"></Icon>
                    <p>ios-glasses-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-browsers" size="32"></Icon>
                    <p>ios-browsers</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-browsers-outline" size="32"></Icon>
                    <p>ios-browsers-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-at" size="32"></Icon>
                    <p>ios-at</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-at-outline" size="32"></Icon>
                    <p>ios-at-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pricetag" size="32"></Icon>
                    <p>ios-pricetag</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pricetag-outline" size="32"></Icon>
                    <p>ios-pricetag-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pricetags" size="32"></Icon>
                    <p>ios-pricetags</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pricetags-outline" size="32"></Icon>
                    <p>ios-pricetags-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cart" size="32"></Icon>
                    <p>ios-cart</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cart-outline" size="32"></Icon>
                    <p>ios-cart-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-chatboxes" size="32"></Icon>
                    <p>ios-chatboxes</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-chatboxes-outline" size="32"></Icon>
                    <p>ios-chatboxes-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-chatbubble" size="32"></Icon>
                    <p>ios-chatbubble</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-chatbubble-outline" size="32"></Icon>
                    <p>ios-chatbubble-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cog" size="32"></Icon>
                    <p>ios-cog</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cog-outline" size="32"></Icon>
                    <p>ios-cog-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-gear" size="32"></Icon>
                    <p>ios-gear</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-gear-outline" size="32"></Icon>
                    <p>ios-gear-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-settings" size="32"></Icon>
                    <p>ios-settings</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-settings-strong" size="32"></Icon>
                    <p>ios-settings-strong</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-toggle" size="32"></Icon>
                    <p>ios-toggle</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-toggle-outline" size="32"></Icon>
                    <p>ios-toggle-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-analytics" size="32"></Icon>
                    <p>ios-analytics</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-analytics-outline" size="32"></Icon>
                    <p>ios-analytics-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pie" size="32"></Icon>
                    <p>ios-pie</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pie-outline" size="32"></Icon>
                    <p>ios-pie-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pulse" size="32"></Icon>
                    <p>ios-pulse</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pulse-strong" size="32"></Icon>
                    <p>ios-pulse-strong</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-filing" size="32"></Icon>
                    <p>ios-filing</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-filing-outline" size="32"></Icon>
                    <p>ios-filing-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-box" size="32"></Icon>
                    <p>ios-box</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-box-outline" size="32"></Icon>
                    <p>ios-box-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-compose" size="32"></Icon>
                    <p>ios-compose</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-compose-outline" size="32"></Icon>
                    <p>ios-compose-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-trash" size="32"></Icon>
                    <p>ios-trash</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-trash-outline" size="32"></Icon>
                    <p>ios-trash-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-copy" size="32"></Icon>
                    <p>ios-copy</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-copy-outline" size="32"></Icon>
                    <p>ios-copy-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-email" size="32"></Icon>
                    <p>ios-email</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-email-outline" size="32"></Icon>
                    <p>ios-email-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-undo" size="32"></Icon>
                    <p>ios-undo</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-undo-outline" size="32"></Icon>
                    <p>ios-undo-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-redo" size="32"></Icon>
                    <p>ios-redo</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-redo-outline" size="32"></Icon>
                    <p>ios-redo-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-paperplane" size="32"></Icon>
                    <p>ios-paperplane</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-paperplane-outline" size="32"></Icon>
                    <p>ios-paperplane-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-folder" size="32"></Icon>
                    <p>ios-folder</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-folder-outline" size="32"></Icon>
                    <p>ios-folder-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-paper" size="32"></Icon>
                    <p>ios-paper</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-paper-outline" size="32"></Icon>
                    <p>ios-paper-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-list" size="32"></Icon>
                    <p>ios-list</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-list-outline" size="32"></Icon>
                    <p>ios-list-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-world" size="32"></Icon>
                    <p>ios-world</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-world-outline" size="32"></Icon>
                    <p>ios-world-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-alarm" size="32"></Icon>
                    <p>ios-alarm</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-alarm-outline" size="32"></Icon>
                    <p>ios-alarm-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-speedometer" size="32"></Icon>
                    <p>ios-speedometer</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-speedometer-outline" size="32"></Icon>
                    <p>ios-speedometer-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-stopwatch" size="32"></Icon>
                    <p>ios-stopwatch</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-stopwatch-outline" size="32"></Icon>
                    <p>ios-stopwatch-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-timer" size="32"></Icon>
                    <p>ios-timer</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-timer-outline" size="32"></Icon>
                    <p>ios-timer-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-clock" size="32"></Icon>
                    <p>ios-clock</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-clock-outline" size="32"></Icon>
                    <p>ios-clock-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-time" size="32"></Icon>
                    <p>ios-time</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-time-outline" size="32"></Icon>
                    <p>ios-time-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-calendar" size="32"></Icon>
                    <p>ios-calendar</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-calendar-outline" size="32"></Icon>
                    <p>ios-calendar-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-photos" size="32"></Icon>
                    <p>ios-photos</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-photos-outline" size="32"></Icon>
                    <p>ios-photos-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-albums" size="32"></Icon>
                    <p>ios-albums</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-albums-outline" size="32"></Icon>
                    <p>ios-albums-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-camera" size="32"></Icon>
                    <p>ios-camera</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-camera-outline" size="32"></Icon>
                    <p>ios-camera-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-reverse-camera" size="32"></Icon>
                    <p>ios-reverse-camera</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-reverse-camera-outline" size="32"></Icon>
                    <p>ios-reverse-camera-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-eye" size="32"></Icon>
                    <p>ios-eye</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-eye-outline" size="32"></Icon>
                    <p>ios-eye-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-bolt" size="32"></Icon>
                    <p>ios-bolt</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-bolt-outline" size="32"></Icon>
                    <p>ios-bolt-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-color-wand" size="32"></Icon>
                    <p>ios-color-wand</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-color-wand-outline" size="32"></Icon>
                    <p>ios-color-wand-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-color-filter" size="32"></Icon>
                    <p>ios-color-filter</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-color-filter-outline" size="32"></Icon>
                    <p>ios-color-filter-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-grid-view" size="32"></Icon>
                    <p>ios-grid-view</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-grid-view-outline" size="32"></Icon>
                    <p>ios-grid-view-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-crop-strong" size="32"></Icon>
                    <p>ios-crop-strong</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-crop" size="32"></Icon>
                    <p>ios-crop</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-barcode" size="32"></Icon>
                    <p>ios-barcode</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-barcode-outline" size="32"></Icon>
                    <p>ios-barcode-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-briefcase" size="32"></Icon>
                    <p>ios-briefcase</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-briefcase-outline" size="32"></Icon>
                    <p>ios-briefcase-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-medkit" size="32"></Icon>
                    <p>ios-medkit</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-medkit-outline" size="32"></Icon>
                    <p>ios-medkit-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-medical" size="32"></Icon>
                    <p>ios-medical</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-medical-outline" size="32"></Icon>
                    <p>ios-medical-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-infinite" size="32"></Icon>
                    <p>ios-infinite</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-infinite-outline" size="32"></Icon>
                    <p>ios-infinite-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-calculator" size="32"></Icon>
                    <p>ios-calculator</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-calculator-outline" size="32"></Icon>
                    <p>ios-calculator-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-keypad" size="32"></Icon>
                    <p>ios-keypad</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-keypad-outline" size="32"></Icon>
                    <p>ios-keypad-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-telephone" size="32"></Icon>
                    <p>ios-telephone</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-telephone-outline" size="32"></Icon>
                    <p>ios-telephone-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-drag" size="32"></Icon>
                    <p>ios-drag</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-location" size="32"></Icon>
                    <p>ios-location</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-location-outline" size="32"></Icon>
                    <p>ios-location-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-navigate" size="32"></Icon>
                    <p>ios-navigate</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-navigate-outline" size="32"></Icon>
                    <p>ios-navigate-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-locked" size="32"></Icon>
                    <p>ios-locked</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-locked-outline" size="32"></Icon>
                    <p>ios-locked-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-unlocked" size="32"></Icon>
                    <p>ios-unlocked</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-unlocked-outline" size="32"></Icon>
                    <p>ios-unlocked-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-monitor" size="32"></Icon>
                    <p>ios-monitor</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-monitor-outline" size="32"></Icon>
                    <p>ios-monitor-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-printer" size="32"></Icon>
                    <p>ios-printer</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-printer-outline" size="32"></Icon>
                    <p>ios-printer-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-game-controller-a" size="32"></Icon>
                    <p>ios-game-controller-a</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-game-controller-a-outline" size="32"></Icon>
                    <p>ios-game-controller-a-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-game-controller-b" size="32"></Icon>
                    <p>ios-game-controller-b</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-game-controller-b-outline" size="32"></Icon>
                    <p>ios-game-controller-b-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-americanfootball" size="32"></Icon>
                    <p>ios-americanfootball</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-americanfootball-outline" size="32"></Icon>
                    <p>ios-americanfootball-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-baseball" size="32"></Icon>
                    <p>ios-baseball</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-baseball-outline" size="32"></Icon>
                    <p>ios-baseball-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-basketball" size="32"></Icon>
                    <p>ios-basketball</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-basketball-outline" size="32"></Icon>
                    <p>ios-basketball-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-tennisball" size="32"></Icon>
                    <p>ios-tennisball</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-tennisball-outline" size="32"></Icon>
                    <p>ios-tennisball-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-football" size="32"></Icon>
                    <p>ios-football</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-football-outline" size="32"></Icon>
                    <p>ios-football-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-body" size="32"></Icon>
                    <p>ios-body</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-body-outline" size="32"></Icon>
                    <p>ios-body-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-person" size="32"></Icon>
                    <p>ios-person</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-person-outline" size="32"></Icon>
                    <p>ios-person-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-personadd" size="32"></Icon>
                    <p>ios-personadd</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-personadd-outline" size="32"></Icon>
                    <p>ios-personadd-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-people" size="32"></Icon>
                    <p>ios-people</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-people-outline" size="32"></Icon>
                    <p>ios-people-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-musical-notes" size="32"></Icon>
                    <p>ios-musical-notes</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-musical-note" size="32"></Icon>
                    <p>ios-musical-note</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-bell" size="32"></Icon>
                    <p>ios-bell</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-bell-outline" size="32"></Icon>
                    <p>ios-bell-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-mic" size="32"></Icon>
                    <p>ios-mic</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-mic-outline" size="32"></Icon>
                    <p>ios-mic-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-mic-off" size="32"></Icon>
                    <p>ios-mic-off</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-volume-high" size="32"></Icon>
                    <p>ios-volume-high</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-volume-low" size="32"></Icon>
                    <p>ios-volume-low</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-play" size="32"></Icon>
                    <p>ios-play</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-play-outline" size="32"></Icon>
                    <p>ios-play-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pause" size="32"></Icon>
                    <p>ios-pause</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pause-outline" size="32"></Icon>
                    <p>ios-pause-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-recording" size="32"></Icon>
                    <p>ios-recording</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-recording-outline" size="32"></Icon>
                    <p>ios-recording-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-fastforward" size="32"></Icon>
                    <p>ios-fastforward</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-fastforward-outline" size="32"></Icon>
                    <p>ios-fastforward-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-rewind" size="32"></Icon>
                    <p>ios-rewind</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-rewind-outline" size="32"></Icon>
                    <p>ios-rewind-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-skipbackward" size="32"></Icon>
                    <p>ios-skipbackward</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-skipbackward-outline" size="32"></Icon>
                    <p>ios-skipbackward-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-skipforward" size="32"></Icon>
                    <p>ios-skipforward</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-skipforward-outline" size="32"></Icon>
                    <p>ios-skipforward-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-shuffle-strong" size="32"></Icon>
                    <p>ios-shuffle-strong</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-shuffle" size="32"></Icon>
                    <p>ios-shuffle</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-videocam" size="32"></Icon>
                    <p>ios-videocam</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-videocam-outline" size="32"></Icon>
                    <p>ios-videocam-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-film" size="32"></Icon>
                    <p>ios-film</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-film-outline" size="32"></Icon>
                    <p>ios-film-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flask" size="32"></Icon>
                    <p>ios-flask</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flask-outline" size="32"></Icon>
                    <p>ios-flask-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-lightbulb" size="32"></Icon>
                    <p>ios-lightbulb</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-lightbulb-outline" size="32"></Icon>
                    <p>ios-lightbulb-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-wineglass" size="32"></Icon>
                    <p>ios-wineglass</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-wineglass-outline" size="32"></Icon>
                    <p>ios-wineglass-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pint" size="32"></Icon>
                    <p>ios-pint</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-pint-outline" size="32"></Icon>
                    <p>ios-pint-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-nutrition" size="32"></Icon>
                    <p>ios-nutrition</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-nutrition-outline" size="32"></Icon>
                    <p>ios-nutrition-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flower" size="32"></Icon>
                    <p>ios-flower</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flower-outline" size="32"></Icon>
                    <p>ios-flower-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-rose" size="32"></Icon>
                    <p>ios-rose</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-rose-outline" size="32"></Icon>
                    <p>ios-rose-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-paw" size="32"></Icon>
                    <p>ios-paw</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-paw-outline" size="32"></Icon>
                    <p>ios-paw-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flame" size="32"></Icon>
                    <p>ios-flame</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-flame-outline" size="32"></Icon>
                    <p>ios-flame-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-sunny" size="32"></Icon>
                    <p>ios-sunny</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-sunny-outline" size="32"></Icon>
                    <p>ios-sunny-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-partlysunny" size="32"></Icon>
                    <p>ios-partlysunny</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-partlysunny-outline" size="32"></Icon>
                    <p>ios-partlysunny-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloudy" size="32"></Icon>
                    <p>ios-cloudy</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloudy-outline" size="32"></Icon>
                    <p>ios-cloudy-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-rainy" size="32"></Icon>
                    <p>ios-rainy</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-rainy-outline" size="32"></Icon>
                    <p>ios-rainy-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-thunderstorm" size="32"></Icon>
                    <p>ios-thunderstorm</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-thunderstorm-outline" size="32"></Icon>
                    <p>ios-thunderstorm-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-snowy" size="32"></Icon>
                    <p>ios-snowy</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-moon" size="32"></Icon>
                    <p>ios-moon</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-moon-outline" size="32"></Icon>
                    <p>ios-moon-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloudy-night" size="32"></Icon>
                    <p>ios-cloudy-night</p>
                </div>
                <div class="icons-item">
                    <Icon type="ios-cloudy-night-outline" size="32"></Icon>
                    <p>ios-cloudy-night-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-up" size="32"></Icon>
                    <p>android-arrow-up</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-forward" size="32"></Icon>
                    <p>android-arrow-forward</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-down" size="32"></Icon>
                    <p>android-arrow-down</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-back" size="32"></Icon>
                    <p>android-arrow-back</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropup" size="32"></Icon>
                    <p>android-arrow-dropup</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropup-circle" size="32"></Icon>
                    <p>android-arrow-dropup-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropright" size="32"></Icon>
                    <p>android-arrow-dropright</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropright-circle" size="32"></Icon>
                    <p>android-arrow-dropright-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropdown" size="32"></Icon>
                    <p>android-arrow-dropdown</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropdown-circle" size="32"></Icon>
                    <p>android-arrow-dropdown-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropleft" size="32"></Icon>
                    <p>android-arrow-dropleft</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-arrow-dropleft-circle" size="32"></Icon>
                    <p>android-arrow-dropleft-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-add" size="32"></Icon>
                    <p>android-add</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-add-circle" size="32"></Icon>
                    <p>android-add-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-remove" size="32"></Icon>
                    <p>android-remove</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-remove-circle" size="32"></Icon>
                    <p>android-remove-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-close" size="32"></Icon>
                    <p>android-close</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-cancel" size="32"></Icon>
                    <p>android-cancel</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-radio-button-off" size="32"></Icon>
                    <p>android-radio-button-off</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-radio-button-on" size="32"></Icon>
                    <p>android-radio-button-on</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-checkmark-circle" size="32"></Icon>
                    <p>android-checkmark-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-checkbox-outline-blank" size="32"></Icon>
                    <p>android-checkbox-outline-blank</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-checkbox-outline" size="32"></Icon>
                    <p>android-checkbox-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-checkbox-blank" size="32"></Icon>
                    <p>android-checkbox-blank</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-checkbox" size="32"></Icon>
                    <p>android-checkbox</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-done" size="32"></Icon>
                    <p>android-done</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-done-all" size="32"></Icon>
                    <p>android-done-all</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-menu" size="32"></Icon>
                    <p>android-menu</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-more-horizontal" size="32"></Icon>
                    <p>android-more-horizontal</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-more-vertical" size="32"></Icon>
                    <p>android-more-vertical</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-refresh" size="32"></Icon>
                    <p>android-refresh</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-sync" size="32"></Icon>
                    <p>android-sync</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-wifi" size="32"></Icon>
                    <p>android-wifi</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-call" size="32"></Icon>
                    <p>android-call</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-apps" size="32"></Icon>
                    <p>android-apps</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-settings" size="32"></Icon>
                    <p>android-settings</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-options" size="32"></Icon>
                    <p>android-options</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-funnel" size="32"></Icon>
                    <p>android-funnel</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-search" size="32"></Icon>
                    <p>android-search</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-home" size="32"></Icon>
                    <p>android-home</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-cloud-outline" size="32"></Icon>
                    <p>android-cloud-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-cloud" size="32"></Icon>
                    <p>android-cloud</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-download" size="32"></Icon>
                    <p>android-download</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-upload" size="32"></Icon>
                    <p>android-upload</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-cloud-done" size="32"></Icon>
                    <p>android-cloud-done</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-cloud-circle" size="32"></Icon>
                    <p>android-cloud-circle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-favorite-outline" size="32"></Icon>
                    <p>android-favorite-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-favorite" size="32"></Icon>
                    <p>android-favorite</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-star-outline" size="32"></Icon>
                    <p>android-star-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-star-half" size="32"></Icon>
                    <p>android-star-half</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-star" size="32"></Icon>
                    <p>android-star</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-calendar" size="32"></Icon>
                    <p>android-calendar</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-alarm-clock" size="32"></Icon>
                    <p>android-alarm-clock</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-time" size="32"></Icon>
                    <p>android-time</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-stopwatch" size="32"></Icon>
                    <p>android-stopwatch</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-watch" size="32"></Icon>
                    <p>android-watch</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-locate" size="32"></Icon>
                    <p>android-locate</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-navigate" size="32"></Icon>
                    <p>android-navigate</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-pin" size="32"></Icon>
                    <p>android-pin</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-compass" size="32"></Icon>
                    <p>android-compass</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-map" size="32"></Icon>
                    <p>android-map</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-walk" size="32"></Icon>
                    <p>android-walk</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-bicycle" size="32"></Icon>
                    <p>android-bicycle</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-car" size="32"></Icon>
                    <p>android-car</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-bus" size="32"></Icon>
                    <p>android-bus</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-subway" size="32"></Icon>
                    <p>android-subway</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-train" size="32"></Icon>
                    <p>android-train</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-boat" size="32"></Icon>
                    <p>android-boat</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-plane" size="32"></Icon>
                    <p>android-plane</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-restaurant" size="32"></Icon>
                    <p>android-restaurant</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-bar" size="32"></Icon>
                    <p>android-bar</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-cart" size="32"></Icon>
                    <p>android-cart</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-camera" size="32"></Icon>
                    <p>android-camera</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-image" size="32"></Icon>
                    <p>android-image</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-film" size="32"></Icon>
                    <p>android-film</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-color-palette" size="32"></Icon>
                    <p>android-color-palette</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-create" size="32"></Icon>
                    <p>android-create</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-mail" size="32"></Icon>
                    <p>android-mail</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-drafts" size="32"></Icon>
                    <p>android-drafts</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-send" size="32"></Icon>
                    <p>android-send</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-archive" size="32"></Icon>
                    <p>android-archive</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-delete" size="32"></Icon>
                    <p>android-delete</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-attach" size="32"></Icon>
                    <p>android-attach</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-share" size="32"></Icon>
                    <p>android-share</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-share-alt" size="32"></Icon>
                    <p>android-share-alt</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-bookmark" size="32"></Icon>
                    <p>android-bookmark</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-document" size="32"></Icon>
                    <p>android-document</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-clipboard" size="32"></Icon>
                    <p>android-clipboard</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-list" size="32"></Icon>
                    <p>android-list</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-folder-open" size="32"></Icon>
                    <p>android-folder-open</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-folder" size="32"></Icon>
                    <p>android-folder</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-print" size="32"></Icon>
                    <p>android-print</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-open" size="32"></Icon>
                    <p>android-open</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-exit" size="32"></Icon>
                    <p>android-exit</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-contract" size="32"></Icon>
                    <p>android-contract</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-expand" size="32"></Icon>
                    <p>android-expand</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-globe" size="32"></Icon>
                    <p>android-globe</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-chat" size="32"></Icon>
                    <p>android-chat</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-textsms" size="32"></Icon>
                    <p>android-textsms</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-hangout" size="32"></Icon>
                    <p>android-hangout</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-happy" size="32"></Icon>
                    <p>android-happy</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-sad" size="32"></Icon>
                    <p>android-sad</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-person" size="32"></Icon>
                    <p>android-person</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-people" size="32"></Icon>
                    <p>android-people</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-person-add" size="32"></Icon>
                    <p>android-person-add</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-contact" size="32"></Icon>
                    <p>android-contact</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-contacts" size="32"></Icon>
                    <p>android-contacts</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-playstore" size="32"></Icon>
                    <p>android-playstore</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-lock" size="32"></Icon>
                    <p>android-lock</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-unlock" size="32"></Icon>
                    <p>android-unlock</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-microphone" size="32"></Icon>
                    <p>android-microphone</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-microphone-off" size="32"></Icon>
                    <p>android-microphone-off</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-notifications-none" size="32"></Icon>
                    <p>android-notifications-none</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-notifications" size="32"></Icon>
                    <p>android-notifications</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-notifications-off" size="32"></Icon>
                    <p>android-notifications-off</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-volume-mute" size="32"></Icon>
                    <p>android-volume-mute</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-volume-down" size="32"></Icon>
                    <p>android-volume-down</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-volume-up" size="32"></Icon>
                    <p>android-volume-up</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-volume-off" size="32"></Icon>
                    <p>android-volume-off</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-hand" size="32"></Icon>
                    <p>android-hand</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-desktop" size="32"></Icon>
                    <p>android-desktop</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-laptop" size="32"></Icon>
                    <p>android-laptop</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-phone-portrait" size="32"></Icon>
                    <p>android-phone-portrait</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-phone-landscape" size="32"></Icon>
                    <p>android-phone-landscape</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-bulb" size="32"></Icon>
                    <p>android-bulb</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-sunny" size="32"></Icon>
                    <p>android-sunny</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-alert" size="32"></Icon>
                    <p>android-alert</p>
                </div>
                <div class="icons-item">
                    <Icon type="android-warning" size="32"></Icon>
                    <p>android-warning</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-twitter" size="32"></Icon>
                    <p>social-twitter</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-twitter-outline" size="32"></Icon>
                    <p>social-twitter-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-facebook" size="32"></Icon>
                    <p>social-facebook</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-facebook-outline" size="32"></Icon>
                    <p>social-facebook-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-googleplus" size="32"></Icon>
                    <p>social-googleplus</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-googleplus-outline" size="32"></Icon>
                    <p>social-googleplus-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-google" size="32"></Icon>
                    <p>social-google</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-google-outline" size="32"></Icon>
                    <p>social-google-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-dribbble" size="32"></Icon>
                    <p>social-dribbble</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-dribbble-outline" size="32"></Icon>
                    <p>social-dribbble-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-octocat" size="32"></Icon>
                    <p>social-octocat</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-github" size="32"></Icon>
                    <p>social-github</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-github-outline" size="32"></Icon>
                    <p>social-github-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-instagram" size="32"></Icon>
                    <p>social-instagram</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-instagram-outline" size="32"></Icon>
                    <p>social-instagram-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-whatsapp" size="32"></Icon>
                    <p>social-whatsapp</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-whatsapp-outline" size="32"></Icon>
                    <p>social-whatsapp-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-snapchat" size="32"></Icon>
                    <p>social-snapchat</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-snapchat-outline" size="32"></Icon>
                    <p>social-snapchat-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-foursquare" size="32"></Icon>
                    <p>social-foursquare</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-foursquare-outline" size="32"></Icon>
                    <p>social-foursquare-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-pinterest" size="32"></Icon>
                    <p>social-pinterest</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-pinterest-outline" size="32"></Icon>
                    <p>social-pinterest-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-rss" size="32"></Icon>
                    <p>social-rss</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-rss-outline" size="32"></Icon>
                    <p>social-rss-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-tumblr" size="32"></Icon>
                    <p>social-tumblr</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-tumblr-outline" size="32"></Icon>
                    <p>social-tumblr-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-wordpress" size="32"></Icon>
                    <p>social-wordpress</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-wordpress-outline" size="32"></Icon>
                    <p>social-wordpress-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-reddit" size="32"></Icon>
                    <p>social-reddit</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-reddit-outline" size="32"></Icon>
                    <p>social-reddit-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-hackernews" size="32"></Icon>
                    <p>social-hackernews</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-hackernews-outline" size="32"></Icon>
                    <p>social-hackernews-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-designernews" size="32"></Icon>
                    <p>social-designernews</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-designernews-outline" size="32"></Icon>
                    <p>social-designernews-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-yahoo" size="32"></Icon>
                    <p>social-yahoo</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-yahoo-outline" size="32"></Icon>
                    <p>social-yahoo-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-buffer" size="32"></Icon>
                    <p>social-buffer</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-buffer-outline" size="32"></Icon>
                    <p>social-buffer-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-skype" size="32"></Icon>
                    <p>social-skype</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-skype-outline" size="32"></Icon>
                    <p>social-skype-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-linkedin" size="32"></Icon>
                    <p>social-linkedin</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-linkedin-outline" size="32"></Icon>
                    <p>social-linkedin-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-vimeo" size="32"></Icon>
                    <p>social-vimeo</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-vimeo-outline" size="32"></Icon>
                    <p>social-vimeo-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-twitch" size="32"></Icon>
                    <p>social-twitch</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-twitch-outline" size="32"></Icon>
                    <p>social-twitch-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-youtube" size="32"></Icon>
                    <p>social-youtube</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-youtube-outline" size="32"></Icon>
                    <p>social-youtube-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-dropbox" size="32"></Icon>
                    <p>social-dropbox</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-dropbox-outline" size="32"></Icon>
                    <p>social-dropbox-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-apple" size="32"></Icon>
                    <p>social-apple</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-apple-outline" size="32"></Icon>
                    <p>social-apple-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-android" size="32"></Icon>
                    <p>social-android</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-android-outline" size="32"></Icon>
                    <p>social-android-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-windows" size="32"></Icon>
                    <p>social-windows</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-windows-outline" size="32"></Icon>
                    <p>social-windows-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-html5" size="32"></Icon>
                    <p>social-html5</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-html5-outline" size="32"></Icon>
                    <p>social-html5-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-css3" size="32"></Icon>
                    <p>social-css3</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-css3-outline" size="32"></Icon>
                    <p>social-css3-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-javascript" size="32"></Icon>
                    <p>social-javascript</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-javascript-outline" size="32"></Icon>
                    <p>social-javascript-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-angular" size="32"></Icon>
                    <p>social-angular</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-angular-outline" size="32"></Icon>
                    <p>social-angular-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-nodejs" size="32"></Icon>
                    <p>social-nodejs</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-sass" size="32"></Icon>
                    <p>social-sass</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-python" size="32"></Icon>
                    <p>social-python</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-chrome" size="32"></Icon>
                    <p>social-chrome</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-chrome-outline" size="32"></Icon>
                    <p>social-chrome-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-codepen" size="32"></Icon>
                    <p>social-codepen</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-codepen-outline" size="32"></Icon>
                    <p>social-codepen-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-markdown" size="32"></Icon>
                    <p>social-markdown</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-tux" size="32"></Icon>
                    <p>social-tux</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-freebsd-devil" size="32"></Icon>
                    <p>social-freebsd-devil</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-usd" size="32"></Icon>
                    <p>social-usd</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-usd-outline" size="32"></Icon>
                    <p>social-usd-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-bitcoin" size="32"></Icon>
                    <p>social-bitcoin</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-bitcoin-outline" size="32"></Icon>
                    <p>social-bitcoin-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-yen" size="32"></Icon>
                    <p>social-yen</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-yen-outline" size="32"></Icon>
                    <p>social-yen-outline</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-euro" size="32"></Icon>
                    <p>social-euro</p>
                </div>
                <div class="icons-item">
                    <Icon type="social-euro-outline" size="32"></Icon>
                    <p>social-euro-outline</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style scoped>
    .icons-list{
        display: flex;
        flex-wrap: wrap;
    }
    .icons-item{
        width: 25%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 6px;
        padding-top: 20px;
        color: #5c6b77;
    }
    .icons-item p{
        margin: 5px;
        padding-top: 10px;
        font-size: 14px;
        color: #5c6b77;
    }
</style>