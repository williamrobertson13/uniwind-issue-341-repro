import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy470 } from '../generated/copy/copy470';
import { layout470 } from '../generated/layouts/layout470';
import { palette470 } from '../generated/palettes/palette470';

const RuntimeView470 = withUniwind(View);

export function Screen470() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView470 styleClassName={layout470.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy470.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy470.detail} / {palette470.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
