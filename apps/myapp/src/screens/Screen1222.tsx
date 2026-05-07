import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1222 } from '../generated/copy/copy1222';
import { layout1222 } from '../generated/layouts/layout1222';
import { palette1222 } from '../generated/palettes/palette1222';

const RuntimeView1222 = withUniwind(View);

export function Screen1222() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1222 styleClassName={layout1222.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1222.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1222.detail} / {palette1222.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
