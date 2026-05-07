import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy21 } from '../generated/copy/copy21';
import { layout21 } from '../generated/layouts/layout21';
import { palette21 } from '../generated/palettes/palette21';

const RuntimeView21 = withUniwind(View);

export function Screen21() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView21 styleClassName={layout21.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy21.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy21.detail} / {palette21.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
