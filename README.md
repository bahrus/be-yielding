# be-yielding (🏳️) [TODO]

Yield a streamed HTML value to the host

Using the canonical name looks as follows:

```html
<mood-stone>
    <template shadowrootmode=open>
        <div itemscope>
            <span be-yielding itemprop=currentMood>Feeling Dandy</span>
        </div>

        <xtal-element
            prop-defaults='{
                "isHappy": true
            }'
        ></xtal-element>
        <be-hive></be-hive>
    </template>
</mood-stone>
```

What this does:  Set's the mood-stone's currentMood property to value "Feeling Dandy".  Subsequent changes to mood-stone's currentMood property will flow back down to the span.  So the upward dataflow only happens once during initialization, then downward forever more.
