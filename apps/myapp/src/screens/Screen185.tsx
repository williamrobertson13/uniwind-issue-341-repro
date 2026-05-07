import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy185 } from '../generated/copy/copy185';
import { layout185 } from '../generated/layouts/layout185';
import { palette185 } from '../generated/palettes/palette185';

const RuntimeView185 = withUniwind(View);

export function Screen185() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-2xl font-light text-gray-600');

	return (
		<View className="grid grid-cols-2 gap-4 p-3 bg-green-100 rounded-2xl">
			<View className="size-9 bg-blue-600 rounded-full" />
			<RuntimeView185 styleClassName={layout185.rhythm} />
			<Pressable className="px-7 py-2 bg-purple-600 active:bg-purple-700 rounded-md">
				<Text className="text-2xl font-light text-gray-600" style={resolvedStyle}>{copy185.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy185.detail} / {palette185.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
