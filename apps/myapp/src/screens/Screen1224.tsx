import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1224 } from '../generated/copy/copy1224';
import { layout1224 } from '../generated/layouts/layout1224';
import { palette1224 } from '../generated/palettes/palette1224';

const RuntimeView1224 = withUniwind(View);

export function Screen1224() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1224 styleClassName={layout1224.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1224.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1224.detail} / {palette1224.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
