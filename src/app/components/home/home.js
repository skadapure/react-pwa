import React, {Component} from "react";
import Fold from "pawjs/src/components/fold";
import Picture from "pawjs/src/components/picture/picture";

export default class Home extends Component {
  render() {
    return (
      <div className="container">
      <div className="mt-2">
        <p  style={{textAlign:"justify"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Mauris bibendum enim quis ligula congue consequat. Maecenas
          a neque ac diam elementum sollicitudin. Praesent a libero sit
          amet justo viverra mattis vitae ac nulla. Aenean eget tincidunt
          urna. Suspendisse quis iaculis ex. Proin nec ante eros. Donec
          eu eros vitae nunc auctor imperdiet. Praesent nec tortor eget
          magna gravida posuere. Sed at velit at est dictum mollis. Pellentesque
          ullamcorper dapibus nulla, efficitur pharetra nisi sodales ut.
        </p>
        <Fold placeholder={() => <div className="text-center mt-3 mb-3">Loading folded content.. Please wait..</div>}>
          <p  style={{textAlign:"justify"}}>
            Cras at elementum magna. Proin sed vulputate erat. Quisque magna nibh,
            posuere in mattis id, consectetur non nunc. Sed sodales diam risus,
            non facilisis augue cursus id. Nulla non magna at tellus tempor
            efficitur id nec ex. Vestibulum a ex a dolor dapibus vulputate.
            Etiam ac diam vestibulum, commodo lacus nec, feugiat diam. Mauris
            sollicitudin pellentesque pretium. Suspendisse at tempus lectus.
            Vivamus euismod velit quis tincidunt pulvinar. In posuere, libero sed
            condimentum fringilla, tortor mi maximus dolor, eget aliquam turpis
            libero at sem. Ut pulvinar, odio a vestibulum pretium, ante leo volutpat
            massa, in suscipit diam tortor id odio. Nunc convallis vitae felis eget aliquet.
          </p>
        </Fold>
      </div>
      </div>
    );
  }
}