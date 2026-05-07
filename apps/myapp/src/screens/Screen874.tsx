import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy874 } from '../generated/copy/copy874';
import { layout874 } from '../generated/layouts/layout874';
import { palette874 } from '../generated/palettes/palette874';

const RuntimeView874 = withUniwind(View);

export function Screen874() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="flex items-center justify-center p-2 bg-red-50 rounded-md ring-2 ring-red-300">
			<View className="size-14 bg-amber-500 rounded-full" />
			<RuntimeView874 styleClassName={layout874.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy874.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy874.detail} / {palette874.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
