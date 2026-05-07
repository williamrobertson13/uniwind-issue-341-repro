import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1080 } from '../generated/copy/copy1080';
import { layout1080 } from '../generated/layouts/layout1080';
import { palette1080 } from '../generated/palettes/palette1080';

const RuntimeView1080 = withUniwind(View);

export function Screen1080() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView1080 styleClassName={layout1080.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy1080.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1080.detail} / {palette1080.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
