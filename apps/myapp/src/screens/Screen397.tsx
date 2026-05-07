import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy397 } from '../generated/copy/copy397';
import { layout397 } from '../generated/layouts/layout397';
import { palette397 } from '../generated/palettes/palette397';

const RuntimeView397 = withUniwind(View);

export function Screen397() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView397 styleClassName={layout397.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy397.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy397.detail} / {palette397.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
