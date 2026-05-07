import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy934 } from '../generated/copy/copy934';
import { layout934 } from '../generated/layouts/layout934';
import { palette934 } from '../generated/palettes/palette934';

const RuntimeView934 = withUniwind(View);

export function Screen934() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="relative flex p-8 bg-indigo-50 rounded shadow-2xl">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView934 styleClassName={layout934.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy934.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy934.detail} / {palette934.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
