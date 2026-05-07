import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy937 } from '../generated/copy/copy937';
import { layout937 } from '../generated/layouts/layout937';
import { palette937 } from '../generated/palettes/palette937';

const RuntimeView937 = withUniwind(View);

export function Screen937() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-normal text-gray-200');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView937 styleClassName={layout937.rhythm} />
			<Pressable className="px-3 py-2 bg-purple-200 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-normal text-gray-200" style={resolvedStyle}>{copy937.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy937.detail} / {palette937.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
