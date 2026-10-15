function run(ctx) {
  return {
    mode: "transform",
    transform: {
      text: ctx.text.replace(/^OLD-/gm, "NEW-")
    }
  };
}
