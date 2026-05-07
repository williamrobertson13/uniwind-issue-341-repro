import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy819 } from '../generated/copy/copy819';
import { layout819 } from '../generated/layouts/layout819';
import { palette819 } from '../generated/palettes/palette819';

const RuntimeView819 = withUniwind(View);

export function Screen819() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView819 styleClassName={layout819.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy819.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy819.detail} / {palette819.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
