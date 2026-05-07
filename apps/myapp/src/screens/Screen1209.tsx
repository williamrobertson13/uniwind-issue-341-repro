import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1209 } from '../generated/copy/copy1209';
import { layout1209 } from '../generated/layouts/layout1209';
import { palette1209 } from '../generated/palettes/palette1209';

const RuntimeView1209 = withUniwind(View);

export function Screen1209() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1209 styleClassName={layout1209.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1209.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1209.detail} / {palette1209.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
