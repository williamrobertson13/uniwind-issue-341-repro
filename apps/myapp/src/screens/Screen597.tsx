import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy597 } from '../generated/copy/copy597';
import { layout597 } from '../generated/layouts/layout597';
import { palette597 } from '../generated/palettes/palette597';

const RuntimeView597 = withUniwind(View);

export function Screen597() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView597 styleClassName={layout597.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy597.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy597.detail} / {palette597.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
