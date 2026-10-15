<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

- Keep the demo welcome at / and the dashboard at /dashboard, with each journey screen an individual TanStack route sharing an in-memory React workflow context; this enables directly capturable screens without real authentication or external services.
- Define visual roles and layout styles in src/styles.css and use the shared Button for interactive commands; this keeps the prototype consistent.
