import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1353 } from '../generated/copy/copy1353';
import { layout1353 } from '../generated/layouts/layout1353';
import { palette1353 } from '../generated/palettes/palette1353';

const RuntimeView1353 = withUniwind(View);

export function Screen1353() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-lg font-semibold text-gray-400');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-13 bg-emerald-500 rounded-full" />
			<RuntimeView1353 styleClassName={layout1353.rhythm} />
			<Pressable className="px-5 py-4 bg-purple-400 active:bg-purple-700 rounded-md">
				<Text className="text-lg font-semibold text-gray-400" style={resolvedStyle}>{copy1353.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1353.detail} / {palette1353.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
