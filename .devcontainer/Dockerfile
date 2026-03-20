FROM mcr.microsoft.com/devcontainers/typescript-node:4-24-trixie

USER node

RUN curl https://mise.run/zsh | sh
ENV PATH="/home/node/.local/bin:${PATH}"
RUN mise exec bun -- bun x playwright install chromium
RUN mise use -g claude@latest codex@latest opencode@latest
COPY mise.toml /tmp/mise.toml
RUN cd /tmp && mise trust && mise install -y