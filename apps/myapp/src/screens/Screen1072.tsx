import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1072 } from '../generated/copy/copy1072';
import { layout1072 } from '../generated/layouts/layout1072';
import { palette1072 } from '../generated/palettes/palette1072';

const RuntimeView1072 = withUniwind(View);

export function Screen1072() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1072 styleClassName={layout1072.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1072.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1072.detail} / {palette1072.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
