import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1329 } from '../generated/copy/copy1329';
import { layout1329 } from '../generated/layouts/layout1329';
import { palette1329 } from '../generated/palettes/palette1329';

const RuntimeView1329 = withUniwind(View);

export function Screen1329() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1329 styleClassName={layout1329.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1329.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1329.detail} / {palette1329.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
