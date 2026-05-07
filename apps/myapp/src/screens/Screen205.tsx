import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy205 } from '../generated/copy/copy205';
import { layout205 } from '../generated/layouts/layout205';
import { palette205 } from '../generated/palettes/palette205';

const RuntimeView205 = withUniwind(View);

export function Screen205() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-sm font-medium text-gray-800');

	return (
		<View className="absolute inset-0 p-4 bg-pink-100 rounded-full opacity-90">
			<View className="size-5 bg-blue-200 rounded-full" />
			<RuntimeView205 styleClassName={layout205.rhythm} />
			<Pressable className="px-3 py-4 bg-purple-800 active:bg-purple-700 rounded-md">
				<Text className="text-sm font-medium text-gray-800" style={resolvedStyle}>{copy205.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy205.detail} / {palette205.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
