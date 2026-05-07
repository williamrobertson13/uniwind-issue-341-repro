import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1006 } from '../generated/copy/copy1006';
import { layout1006 } from '../generated/layouts/layout1006';
import { palette1006 } from '../generated/palettes/palette1006';

const RuntimeView1006 = withUniwind(View);

export function Screen1006() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1006 styleClassName={layout1006.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1006.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1006.detail} / {palette1006.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
