import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy166 } from '../generated/copy/copy166';
import { layout166 } from '../generated/layouts/layout166';
import { palette166 } from '../generated/palettes/palette166';

const RuntimeView166 = withUniwind(View);

export function Screen166() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xl font-bold text-gray-500');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView166 styleClassName={layout166.rhythm} />
			<Pressable className="px-6 py-1 bg-purple-500 active:bg-purple-700 rounded-md">
				<Text className="text-xl font-bold text-gray-500" style={resolvedStyle}>{copy166.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy166.detail} / {palette166.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
