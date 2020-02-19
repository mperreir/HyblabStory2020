class Rope{

  constructor(s){
    this.pl = planck, this.Vec2 = this.pl.Vec2;
    this.world = new this.pl.World(this.Vec2(0, -10));

    if (s != 'empty'){

      this.ground = this.world.createBody();

      //ground.createFixture(pl.Edge(Vec2(-40.0, 0.0), Vec2(40.0, 0.0)), 0.0);

      this.segmentDef = {};
      this.segmentDef.density = 1;
      this.segmentDef.friction = 1;
      this.segmentDef.filterCategoryBits = 0x0001;
      this.segmentDef.filterMaskBits = 0xFFFF & ~0x0002;

      this.segmentJointDef = {};
      this.segmentJointDef.collideConnected = false;

      this.N = 10;
      this.y = 15.0;

      this.prevBody = this.ground;
      for (var i = 0; i < this.N; ++i) {
        this.shape = this.pl.Box(0.5, 0.125);
        this.bd = {};
        this.bd.position = this.Vec2(0.5 + 1.0 * i, this.y);
        this.bd.type = 'dynamic';
        if (i === this.N - 1) {
          this.shape = this.pl.Box(0.5, 0.5);
          this.segmentDef.density = 1;
          this.segmentDef.filterCategoryBits = 0x0002;
          this.bd.position = this.Vec2(1.0 * i, this.y);
        }

        this.body = this.world.createBody(this.bd);
        this.body.createFixture(this.shape, this.segmentDef);

        this.anchor = this.Vec2(i, this.y);
        this.world.createJoint(this.pl.RevoluteJoint(this.segmentJointDef, this.prevBody, this.body, this.anchor));

        this.prevBody = this.body;
      }

      this.ropeJointDef = {};
      this.ropeJointDef.maxLength = this.N - 1.0 + 0.01;
      this.ropeJointDef.localAnchorA = this.Vec2(0.0, this.y);
      this.ropeJointDef.localAnchorB = this.Vec2(0, 0);
      this.rope = this.world.createJoint(this.pl.RopeJoint(this.ropeJointDef, this.ground, this.prevBody));

    }
  }
}
