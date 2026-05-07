import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1068 } from '../generated/copy/copy1068';
import { layout1068 } from '../generated/layouts/layout1068';
import { palette1068 } from '../generated/palettes/palette1068';

const RuntimeView1068 = withUniwind(View);

export function Screen1068() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-normal text-gray-700');

	return (
		<View className="flex-wrap gap-6 p-1 bg-purple-50 rounded-3xl border-dashed border-2">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1068 styleClassName={layout1068.rhythm} />
			<Pressable className="px-2 py-3 bg-purple-700 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-normal text-gray-700" style={resolvedStyle}>{copy1068.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1068.detail} / {palette1068.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
