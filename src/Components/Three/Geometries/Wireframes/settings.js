const canvasWidth = 577;
const canvasHeight = 404;

const settings = {
  camera: {
    fieldOfView: 75,
    aspectRatio: canvasWidth / canvasHeight,
    nearClipping: 1,
    farClipping: 10000,
  },
  capsule: {
    radius: 10,
    length: 10,
    capSubdivisions: 4,
    radialSegments: 8,
  },
  circle: {
    radius: 20,
    segmentsWidth: 50,
    segmentsHeight: 10,
    yRotation: 0.01,
  },
  cone: {
    radius: 20,
    height: 25,
    segments: 50,
    yRotation: 0.01,
  },
  cube: {
    width: 20,
    height: 30,
    depth: 20,
    segmentsWidth: 48,
    segmentsHeight: 48,
    yRotation: 0.01,
  },
  cylinder: {
    radiusTop: 20,
    radiusBottom: 20,
    height: 20,
    segmentsRadius: 24,
    segmentsHeight: 24,
    openEnded: false,
    yRotation: 0.01,
  },
  dodecahedron: {
    radius: 20,
    detail: 0,
    yRotation: 0.01,
  },
  icosahedron: {
    radius: 20,
    detail: 0,
    yRotation: 0.01,
  },
  octahedron: {
    radius: 20,
    detail: 0,
    yRotation: 0.01,
  },
  plane: {
    width: 30,
    depth: 30,
    segmentsWidth: 10,
    segmentsDepth: 10,
    yRotation: 0.01,
  },
  ring: {
    innerRadius: 10,
    outerRadius: 20,
    segments: 32,
    yRotation: 0.01,
  },
  sphere: {
    radius: 20,
    segmentsWidth: 24,
    segmentsHeight: 24,
    yRotation: 0.01,
  },
  tetrahedron: {
    radius: 20,
    detail: 3,
    yRotation: 0.01,
  },
};

export default settings;
