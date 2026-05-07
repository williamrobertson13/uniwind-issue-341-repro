import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy590 } from '../generated/copy/copy590';
import { layout590 } from '../generated/layouts/layout590';
import { palette590 } from '../generated/palettes/palette590';

const RuntimeView590 = withUniwind(View);

export function Screen590() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-6 bg-blue-300 rounded-full" />
			<RuntimeView590 styleClassName={layout590.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy590.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy590.detail} / {palette590.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
