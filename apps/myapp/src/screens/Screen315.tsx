import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy315 } from '../generated/copy/copy315';
import { layout315 } from '../generated/layouts/layout315';
import { palette315 } from '../generated/palettes/palette315';

const RuntimeView315 = withUniwind(View);

export function Screen315() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-row-reverse gap-1 p-5 bg-yellow-100 rounded shadow-lg">
			<View className="size-7 bg-blue-400 rounded-full" />
			<RuntimeView315 styleClassName={layout315.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy315.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy315.detail} / {palette315.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
