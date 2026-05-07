import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy200 } from '../generated/copy/copy200';
import { layout200 } from '../generated/layouts/layout200';
import { palette200 } from '../generated/palettes/palette200';

const RuntimeView200 = withUniwind(View);

export function Screen200() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-12 bg-blue-900 rounded-full" />
			<RuntimeView200 styleClassName={layout200.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy200.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy200.detail} / {palette200.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
