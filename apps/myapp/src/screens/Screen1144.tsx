import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy1144 } from '../generated/copy/copy1144';
import { layout1144 } from '../generated/layouts/layout1144';
import { palette1144 } from '../generated/palettes/palette1144';

const RuntimeView1144 = withUniwind(View);

export function Screen1144() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-8 bg-blue-500 rounded-full" />
			<RuntimeView1144 styleClassName={layout1144.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy1144.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy1144.detail} / {palette1144.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
