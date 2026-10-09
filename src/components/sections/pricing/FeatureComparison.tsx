import { Fragment } from 'react';
import { FEATURE_GROUPS, PLANS } from '../../../content/orbit';
import { Container } from '../../ui/Container';
import { Icon } from '../../ui/Icon';

export function FeatureComparison() {
    return (
        <section id="compare" className="pb-24 lg:pb-32">
            <Container>
                <h2 className="text-center text-[2rem] leading-[1.1] font-semibold text-paper sm:text-[2.5rem]">Compare every feature</h2>
                <p className="mx-auto mt-4 max-w-xl text-center leading-[1.7] text-on-dark">
                    Everything Orbit does today, grouped by what it helps you with.
                </p>

                {/* relative: keeps the table's absolutely positioned sr-only labels inside the scroller */}
                <div className="relative mt-12 overflow-x-auto rounded-card ring-1 ring-ledger-line">
                    <table className="w-full min-w-136 border-collapse text-left text-[0.9375rem]">
                        <caption className="sr-only">Orbit features by plan</caption>
                        <thead className="bg-ledger-raised">
                            <tr>
                                <th scope="col" className="w-1/2 px-5 py-4 font-semibold text-paper">Feature</th>
                                {PLANS.map(plan => (
                                    <th key={plan.key} scope="col" className="px-3 py-4 text-center font-semibold text-paper">{plan.name}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {FEATURE_GROUPS.map(group => (
                                <Fragment key={group.id}>
                                    <tr className="border-t border-ledger-line bg-ledger-raised/40">
                                        <th scope="colgroup" colSpan={PLANS.length + 1} className="px-5 py-3 text-left">
                                            <span className="flex items-center gap-2 font-semibold text-paper">
                                                <Icon name={group.icon} className="size-4 text-brand" />
                                                {group.title}
                                            </span>
                                        </th>
                                    </tr>
                                    {group.features.map(feature => (
                                        <tr key={feature.name} className="border-t border-ledger-line/60">
                                            <th scope="row" className="px-5 py-3.5 font-normal text-on-dark">{feature.name}</th>
                                            {PLANS.map(plan => (
                                                <td key={plan.key} className="px-3 py-3.5 text-center">
                                                    {feature.plans.includes(plan.key) ? (
                                                        <>
                                                            <Icon name="check" className="mx-auto size-4.5 text-brand" />
                                                            <span className="sr-only">Included</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <span aria-hidden="true" className="text-ledger-line">—</span>
                                                            <span className="sr-only">Not included</span>
                                                        </>
                                                    )}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
}
