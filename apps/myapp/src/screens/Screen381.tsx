import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy381 } from '../generated/copy/copy381';
import { layout381 } from '../generated/layouts/layout381';
import { palette381 } from '../generated/palettes/palette381';

const RuntimeView381 = withUniwind(View);

export function Screen381() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView381 styleClassName={layout381.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy381.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy381.detail} / {palette381.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
