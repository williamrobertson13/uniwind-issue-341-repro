import { withUniwind, useCSSVariable, useResolveClassNames } from 'uniwind';
import { Pressable, Text, View } from 'uniwind/components';

import { copy648 } from '../generated/copy/copy648';
import { layout648 } from '../generated/layouts/layout648';
import { palette648 } from '../generated/palettes/palette648';

const RuntimeView648 = withUniwind(View);

export function Screen648() {
	const tone = useCSSVariable('--color-content-primary');
	const resolvedStyle = useResolveClassNames('text-xs font-light text-gray-100');

	return (
		<View className="flex-col gap-3 p-6 bg-blue-50 rounded-xl border border-blue-200">
			<View className="size-4 bg-blue-100 rounded-full" />
			<RuntimeView648 styleClassName={layout648.rhythm} />
			<Pressable className="px-2 py-1 bg-purple-100 active:bg-purple-700 rounded-md">
				<Text className="text-xs font-light text-gray-100" style={resolvedStyle}>{copy648.title}</Text>
			</Pressable>
			<Text className="text-sm text-gray-700 italic underline tracking-normal">
				{copy648.detail} / {palette648.name} / {String(tone ?? 'unset')}
			</Text>
		</View>
	);
}
