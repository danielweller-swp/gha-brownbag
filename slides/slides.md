---
marp: true
---

# GitHub Actions Update

---

# Composite run steps action

---

# Composite run steps action

> A composite run steps action allows you to combine multiple workflow run steps within one action. For example, you can use this feature to bundle together multiple run commands into an action, and then have a workflow that executes the bundled commands a single step using that action.

---

# Composite run steps action

My interpretation:
- Avoid copy'n'pasting common compound CI/CD functionalities
- Give those functionalities a name

---

# Composite run steps action

DEMO

---

# Composite run steps action - My conclusion

Pros :heavy_check_mark::
- Avoids copy'n'pasting
- Can give "block of steps" a name
---

# Composite run steps action - My conclusion

Cons :x::
- May require refactor since not all `step` properties are supported
   ```
   - name: Test
     if: ${{ env.TEST == 'true' }}
     run: npm run test
   ```
   becomes
   ```
   - name: Test
     run: if [ "${{ inputs.test }}" == "true" ]; then npm run test; fi
     shell: bash
   ```
---

# Composite run steps action - My conclusion

Cons :x::
- Needs specification of dependencies at site-of-use
   ```
   - uses: actions/setup-node@v1

   - uses: ./.github/actions/ci-node-gcf
     with:
       working-directory: hello-world
   ```
---

# Composite run steps action - My conclusion

Cons :x::
- Loss of granularity in the logs
  ![step-granularity1](step-granularity1.png) vs ![step-granularity2](step-granularity2.png)
