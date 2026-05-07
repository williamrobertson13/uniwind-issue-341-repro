import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy659 } from '../generated/copy/copy659';
import { layout659 } from '../generated/layouts/layout659';
import { palette659 } from '../generated/palettes/palette659';

const RuntimeView659 = withUniwind(View);

export function Screen659() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-base font-medium text-gray-300');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-15 bg-rose-500 rounded-full" />
			<RuntimeView659 styleClassName={layout659.rhythm} />
			<Pressable className="px-4 py-3 bg-purple-300 active:bg-purple-700 rounded-md">
				<Text className="text-base font-medium text-gray-300" style={resolvedStyle}>{copy659.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy659.detail} / {palette659.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
