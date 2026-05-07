import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy145 } from '../generated/copy/copy145';
import { layout145 } from '../generated/layouts/layout145';
import { palette145 } from '../generated/palettes/palette145';

const RuntimeView145 = withUniwind(View);

export function Screen145() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView145 styleClassName={layout145.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy145.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy145.detail} / {palette145.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
