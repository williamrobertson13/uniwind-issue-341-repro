import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1078 } from '../generated/copy/copy1078';
import { layout1078 } from '../generated/layouts/layout1078';
import { palette1078 } from '../generated/palettes/palette1078';

const RuntimeView1078 = withUniwind(View);

export function Screen1078() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView1078 styleClassName={layout1078.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy1078.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1078.detail} / {palette1078.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
