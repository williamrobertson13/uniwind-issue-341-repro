import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy207 } from '../generated/copy/copy207';
import { layout207 } from '../generated/layouts/layout207';
import { palette207 } from '../generated/palettes/palette207';

const RuntimeView207 = withUniwind(View);

export function Screen207() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row gap-2 p-4 bg-gray-100 rounded-lg shadow-md">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView207 styleClassName={layout207.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy207.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy207.detail} / {palette207.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
